export interface PopupState {
  modalStack: ModalType[];
}

export type ModalType = 'LOGIN' | 'SIGNUP' | 'MOBILE_MENU' | 'START_COOK';
