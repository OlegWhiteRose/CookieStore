import { store } from '@/store';
import { addAlert } from '@/store/alert/alertSlice';

export const showAlert = (
    text: string, 
    type: 'success' | 'error' = 'success', 
    duration: number = 2500
) => {    
    store.dispatch(addAlert({
        id: Date.now(),
        text,
        type,
        duration,
    }));
};

