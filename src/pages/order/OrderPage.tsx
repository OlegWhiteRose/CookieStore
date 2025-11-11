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
import OrderModeSwitcher from '@/components/sections/order-mode-switcher/OrderModeSwitcher';
import CartMode from './CartMode';
import OrderMode from './OrderMode';

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
                    <CartMode 
                        cookies={cookies}
                        draftCookies={draftCookies}
                        loading={loading}
                    />
                ) : (
                    <OrderMode 
                        cookies={cookies}
                        draftCookies={draftCookies}
                        loading={loading}
                    />
                )}
            </SectionContent>
        </VerticalSection>
    );
}

export default OrderPage;
