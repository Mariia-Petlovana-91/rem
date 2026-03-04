import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { PopupState, ModalType } from '../../ts';

const initialState: PopupState = {
  modalStack: [],
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup: (state, action: PayloadAction<ModalType>) => {
      state.modalStack.push(action.payload);
    },
    closePopup: (state) => {
      state.modalStack.pop();
    },
  },
});

export const { openPopup, closePopup } = popupSlice.actions;
export default popupSlice.reducer;
