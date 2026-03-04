import type { AuthBtnProp } from '../../../ts';

const AuthBtn = ({ variant = 'yellow', children, ...rest }: AuthBtnProp) => {
  const base =
    'bg-[var(--bg-btn)] text-[var(--text-btn)]  border p-2 mr-2 rounded-tl-3xl rounded-br-3xl cursor-pointer transition-all duration-300 focus:outline-none ';

  const variants = {
    yellow:
      'border-primary-yellow hover:shadow-md hover:shadow-primary-yellow  focus:shadow-md focus:shadow-primary-yellow',
    cyan: 'border-secondary-cyan hover:shadow-md hover:shadow-secondary-cyan focus:shadow-md focus:shadow-secondary-cyan',
  };

  return (
    <button type="button" className={`${base} ${variants[variant]}`} {...rest}>
      {children}
    </button>
  );
};

export default AuthBtn;
