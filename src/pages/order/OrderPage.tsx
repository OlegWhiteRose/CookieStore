import { useState, useEffect, useRef, useCallback } from 'react';
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
    
    const prevDraftIdsRef = useRef<Set<number>>(new Set());

    const loadCookiesByIds = useCallback(async (ids: number[]): Promise<Cookie[]> => {
        if (ids.length === 0) return [];
        
        const cookiePromises = ids.map(id => cookiesApi.getCookieById(id));
        const responses = await Promise.all(cookiePromises);
        
        return responses
            .filter(res => res.data.status === 'ok')
            .map(res => res.data.data);
    }, []);

    useEffect(() => {
        const currentDraftIds = new Set(draftCookies.map(c => c.id));
        const prevDraftIds = prevDraftIdsRef.current;

        if (draftCookies.length === 0) {
            setCookies([]);
            setLoading(false);
            prevDraftIdsRef.current = currentDraftIds;
            return;
        }

        if (prevDraftIds.size === 0 && currentDraftIds.size > 0) {
            setLoading(true);
            loadCookiesByIds(Array.from(currentDraftIds))
                .then(loadedCookies => setCookies(loadedCookies))
                .catch(err => console.error('Failed to load cookies:', err))
                .finally(() => setLoading(false));
            prevDraftIdsRef.current = currentDraftIds;
            return;
        }

        const removedIds = [...prevDraftIds].filter(id => !currentDraftIds.has(id));
        const addedIds = [...currentDraftIds].filter(id => !prevDraftIds.has(id));

        if (removedIds.length > 0) {
            setCookies(prev => prev.filter(c => !removedIds.includes(c.id)));
        }

        if (addedIds.length > 0) {
            loadCookiesByIds(addedIds)
                .then(newCookies => {
                    setCookies(prev => [...prev, ...newCookies]);
                })
                .catch(err => console.error('Failed to load new cookies:', err));
        }

        prevDraftIdsRef.current = currentDraftIds;
    }, [draftCookies, loadCookiesByIds]);

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
