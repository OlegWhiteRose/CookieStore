import { configureStore } from '@reduxjs/toolkit';

import alertReducer from './alert/alertReducer';
import draftReducer from './draft/draftReducer';
import { createStorageListenerMiddleware } from './draft/storageListener';

const storageListenerMiddleware = createStorageListenerMiddleware();

export const store = configureStore({
  reducer: {
    alert: alertReducer,
    draft: draftReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storageListenerMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

