import { Cookie } from '@/hooks/useCookies';

interface CookieDraft {
    id: number;
    quantity: number;
}

import CartItemForm from '@/components/forms/cart-item-form/CartItemForm';
import ProceedToOrderButton from '@components/elements/buttons/proceed-to-order-button/ProceedToOrderButton';

interface CartModeProps {
    cookies: Cookie[];
    draftCookies: CookieDraft[];
    loading: boolean;
}

function CartMode({ cookies, draftCookies, loading }: CartModeProps) {
    const calculateTotal = () => {
        return cookies.reduce((sum, cookie) => {
            const draftCookie = draftCookies.find(dc => dc.id === cookie.id);
            const quantity = draftCookie?.quantity || 0;
            return sum + (cookie.price * quantity);
        }, 0);
    };

    if (loading) {
        return <div className="order-page__loader">Загрузка...</div>;
    }

    if (cookies.length === 0) {
        return <span className="order-page__empty">Корзина пуста</span>;
    }

    return (
        <div className="order-page__cart">
            <div className="order-page__cart-container">
                <div className="order-page__cart-items">
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
                
                <div className="order-page__cart-summary">
                    <div className="order-page__cart-summary-total">
                        <span className="order-page__cart-summary-label">Итого:</span>
                        <span className="order-page__cart-summary-value">
                            {calculateTotal()} ₽
                        </span>
                    </div>
                    <ProceedToOrderButton text="Перейти к заказу" />
                </div>
            </div>
        </div>
    );
}

export default CartMode;
