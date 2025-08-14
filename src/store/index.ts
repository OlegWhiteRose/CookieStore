import { configureStore, combineReducers } from '@reduxjs/toolkit';
import alertReducer from './alert/alertSlice';

const rootReducer = combineReducers({
  alerts: alertReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['alerts/addAlert'],
        ignoredPaths: ['alerts.queue.items'],
      },
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

