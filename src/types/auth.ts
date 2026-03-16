export type Variant = 'yellow' | 'cyan';

export interface AuthBtnProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}
