export type Variant = 'yellow' | 'cyan';

export interface AuthBtnProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export interface PopupState {
  modalStack: ModalType[];
}

export type ModalType = 'LOGIN' | 'SIGNUP' | 'MOBILE_MENU';
