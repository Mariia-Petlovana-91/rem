import  {createSlice } from "@reduxjs/toolkit";
import type { PayloadAction} from "@reduxjs/toolkit";
import type { PopupState, ModalType } from "../../ts";

const initialState :PopupState ={
        isOpen :false,
        modalType:null
};

const popupSlice= createSlice({
        name:"popup",
        initialState,
        reducers:{
                openPopup:(state, action:PayloadAction<ModalType>)=>{
                        state.isOpen =true;
                        state.modalType=action.payload;
                },
                closePopup:(state)=>{
                        state.isOpen =false;
                        state.modalType = null;
                },
        },
});

export const {openPopup,closePopup}=popupSlice.actions;
export default popupSlice.reducer;