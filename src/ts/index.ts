export type Variant = "yellow" | "cyan";

export type AuthBtnProp ={
        children :React.ReactNode;
        variant?:Variant
};


export type ModalType =
  | "LOGIN"
  | "SIGNUP"
  | "CONFIRM_DELETE";

export interface PopupState {
  isOpen: boolean;
  modalType: ModalType | null;
}