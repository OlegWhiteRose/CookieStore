import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CookieDraft {
    id: number;
    quantity: number;
}

export interface Draft {
  cookies: CookieDraft[];
}

const DRAFT_STORAGE_KEY = 'draft';

const loadFromLocalStorage = (): Draft => {
    try {
        const saved = localStorage.getItem(DRAFT_STORAGE_KEY);
        if (saved) {
            return JSON.parse(saved);
        }
    } catch (error) {
        console.error('Failed to load draft from localStorage:', error);
    }
    return { cookies: [] };
};

const saveToLocalStorage = (state: Draft) => {
    try {
        localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
        console.error('Failed to save draft to localStorage:', error);
    }
};

const initialState: Draft = loadFromLocalStorage();

const draftSlice = createSlice({
    name: 'draft',
    initialState,
    reducers: {
        addCookie: (state, action: PayloadAction<number>) => {
            const cookie = state.cookies.find((cookie) => cookie.id === action.payload);
            if (cookie) {
                cookie.quantity += 1;
            } else {
                state.cookies.push({id: action.payload, quantity: 1});
            }
            saveToLocalStorage(state);
        },
        decreaseCookie: (state, action: PayloadAction<number>) => {
            const cookie = state.cookies.find((cookie) => cookie.id === action.payload);
            if (cookie) {
                if (cookie.quantity > 1) {
                    cookie.quantity -= 1;
                } else {
                    state.cookies = state.cookies.filter((c) => c.id !== action.payload);
                }
            }
            saveToLocalStorage(state);
        },
        removeCookie: (state, action: PayloadAction<number>) => {
            state.cookies = state.cookies.filter((cookie) => cookie.id !== action.payload);
            saveToLocalStorage(state);
        },
        clearDraft: (state) => {
            state.cookies = [];
            saveToLocalStorage(state);
        },
    },
});

export default draftSlice.reducer;
export const { addCookie, decreaseCookie, removeCookie, clearDraft } = draftSlice.actions;
