import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './popup/slice';
import themeReducer from './theme/slice';

export const store = configureStore({
  reducer: {
    popupData: popupReducer,
    themeData: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
