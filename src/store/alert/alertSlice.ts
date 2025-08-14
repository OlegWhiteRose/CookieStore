import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const MAX_ALERTS_COUNT = 3;

export interface Alert {
  id: number;
  text: string;
  type: string;
  duration: number;
}

interface AlertState {
  items: Alert[];
}

const initialState: AlertState = {
  items: [],
};

const alertSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    addAlert: (state, action: PayloadAction<Alert>) => {
      state.items.push(action.payload);
      
      if (state.items.length > MAX_ALERTS_COUNT) {
        state.items.shift();
      }
    },
    removeAlert: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(alert => alert.id !== action.payload);
    },
    clearAlerts: (state) => {
      state.items = [];
    },
  },
});

export const { addAlert, removeAlert, clearAlerts } = alertSlice.actions;
export default alertSlice.reducer;

