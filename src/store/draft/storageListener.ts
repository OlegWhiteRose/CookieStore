import { Middleware } from '@reduxjs/toolkit';
import { syncFromLocalStorage } from './draftReducer';

const DRAFT_STORAGE_KEY = 'draft';

export const createStorageListenerMiddleware = (): Middleware => {
    return (storeAPI) => {
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === DRAFT_STORAGE_KEY && event.newValue !== null) {
                storeAPI.dispatch(syncFromLocalStorage());
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('storage', handleStorageChange);
        }

        return (next) => (action) => {
            return next(action);
        };
    };
};
