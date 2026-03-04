import type { RootState } from '../store';

export const selectModalStack = (state: RootState) =>
  state.popupData.modalStack;

export const selectActiveModal = (state: RootState) => {
  const stack = state.popupData.modalStack;
  return stack[stack.length - 1] ?? null;
};

export const selectIsOpen = (state: RootState) =>
  state.popupData.modalStack.length > 0;
