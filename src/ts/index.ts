export type Variant = "yellow" | "cyan";

export interface AuthBtnProp
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export type ModalType =
  | "LOGIN"
  | "SIGNUP"

export interface PopupState {
  isOpen: boolean;
  modalType: ModalType | null ;
}