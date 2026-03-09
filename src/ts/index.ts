export type Variant = 'yellow' | 'cyan';

export type DropdownProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export type VoidFn = () => void;

export interface AuthBtnProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export interface PopupState {
  modalStack: ModalType[];
}

export type ModalType = 'LOGIN' | 'SIGNUP' | 'MOBILE_MENU';
