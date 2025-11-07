import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

import { cookiesApi } from '@/api/cookiesApi';
import { Cookie } from '@/hooks/useCookies';

import '../pages.scss';
import './OrderPage.scss';

import VerticalSection from '@components/templates/vertical-section/VerticalSection';
import SectionContent from '@/components/templates/section-content/SectionContent';
import CartItemForm from '@/components/forms/cart-item-form/CartItemForm';
import ProceedToOrderButton from '@components/elements/buttons/proceed-to-order-button/ProceedToOrderButton';
import OrderModeSwitcher from '@/components/sections/order-mode-switcher/OrderModeSwitcher';

type Mode = 'cart' | 'order';

function OrderPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const mode = (searchParams.get('mode') || 'cart') as Mode;
    
    const draftCookies = useSelector((state: RootState) => state.draft.cookies);
    const [cookies, setCookies] = useState<Cookie[]>([]);
    const [loading, setLoading] = useState(true);

    const cookieIds = draftCookies.map(c => c.id).sort().join(',');

    useEffect(() => {
        const loadCookies = async () => {
            if (draftCookies.length === 0) {
                setCookies([]);
                setLoading(false);
                return;
            }

            setLoading(true);
            try {
                const cookiePromises = draftCookies.map(dc => 
                    cookiesApi.getCookieById(dc.id)
                );
                const responses = await Promise.all(cookiePromises);
                
                const loadedCookies = responses
                    .filter(res => res.data.status === 'ok')
                    .map(res => res.data.data);
                
                setCookies(loadedCookies);
            } catch (error) {
                console.error('Failed to load cookies:', error);
            } finally {
                setLoading(false);
            }
        };

        loadCookies();
    }, [cookieIds]);

    const handleModeChange = (newMode: Mode) => {
        setSearchParams({ mode: newMode });
    };

    return (
        <VerticalSection className="page order-page">
            <SectionContent className="order-page__content">
                <OrderModeSwitcher 
                    activeMode={mode}
                    onModeChange={handleModeChange}
                />

                {mode === 'cart' ? (
                    <div className="order-page__cart">
                        {loading && <div className="order-page__loader">Загрузка...</div>}
                        {!loading && cookies.length === 0 && (
                            <span className="order-page__empty">Корзина пуста</span>
                        )}
                        {!loading && cookies.length > 0 && (
                            <>
                                <div className="order-page__items">
                                    {cookies.map(cookie => {
                                        const draftCookie = draftCookies.find(dc => dc.id === cookie.id);
                                        const quantity = draftCookie?.quantity || 0;
                                        const totalPrice = cookie.price * quantity;

                                        return (
                                            <CartItemForm
                                                key={cookie.id}
                                                id={cookie.id}
                                                title={cookie.title}
                                                quantity={cookie.quantity}
                                                totalPrice={totalPrice}
                                                imgUrl={cookie.img_url}
                                            />
                                        );
                                    })}

                                </div>
                                
                                <div className="order-page__total">
                                    <div className="order-page__total-content">
                                        <span className="order-page__total-content-label">Итого:</span>
                                        <span className="order-page__total-content-price">
                                            {cookies.reduce((sum, cookie) => {
                                                const draftCookie = draftCookies.find(dc => dc.id === cookie.id);
                                                const quantity = draftCookie?.quantity || 0;
                                                return sum + (cookie.price * quantity);
                                            }, 0)} ₽
                                        </span>
                                    </div>
                                    <ProceedToOrderButton text="Перейти к заказу" />
                                </div>
                            </>
                        )}
                    </div>
                ) : (
                    <div className="order-page__order">
                        {/* Раздел заказа - пока пустой */}
                    </div>
                )}
            </SectionContent>
        </VerticalSection>
    );
}

export default OrderPage;
