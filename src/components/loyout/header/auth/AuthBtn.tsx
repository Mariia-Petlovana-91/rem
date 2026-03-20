import type { AuthBtnProp } from '@/types/auth';

const AuthBtn = ({ variant = 'yellow', children, ...rest }: AuthBtnProp) => {
  const variants = {
    yellow:
      'hover:shadow-md hover:shadow-primary-yellow hover:border-primary-yellow focus:shadow-md focus:border-primary-yellow focus:shadow-primary-yellow',
    cyan: 'hover:shadow-md hover:shadow-secondary-cyan hover:border-secondary-cyan focus:shadow-md focus:shadow-secondary-cyan focus:border-secondary-cyan',
  };

  return (
    <button type="button" className={`btn ${variants[variant]}`} {...rest}>
      {children}
    </button>
  );
};

export default AuthBtn;
