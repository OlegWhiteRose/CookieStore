import { store } from '@/store';
import { addAlert } from '@/store/alert/alertReducer';

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

