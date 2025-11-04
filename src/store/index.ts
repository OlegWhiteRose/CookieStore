import { configureStore } from '@reduxjs/toolkit';

import alertReducer from './alert/alertReducer';
import draftReducer from './draft/draftReducer';

export const store = configureStore({
  reducer: {
    alert: alertReducer,
    draft: draftReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

