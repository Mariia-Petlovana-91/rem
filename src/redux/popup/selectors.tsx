import type { RootState } from "../store";
export const selectOpen =(state:RootState)=> state.popupData.isOpen;
export const selectModalType = (state:RootState)=>state.popupData.modalType;
