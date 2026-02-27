import type { AuthBtnProp } from "../../../ts";

const AuthBtn=({ children, variant = "yellow" }: AuthBtnProp
)=> {     
  const base =  
    "border p-2 mr-2 rounded-tl-3xl rounded-br-3xl cursor-pointer transition-all duration-300 focus:outline-none";

  const variants = {
    yellow:
      "border-primary-yellow text-primary-yellow hover:border-secondary-cyan hover:text-secondary-cyan hover:shadow-md hover:shadow-secondary-cyan focus:border-secondary-cyan focus:text-secondary-cyan focus:shadow-md focus:shadow-secondary-cyan",
    cyan:
      "border-secondary-cyan text-secondary-cyan hover:border-primary-yellow hover:text-primary-yellow hover:shadow-md hover:shadow-primary-yellow focus:border-primary-yellow focus:text-primary-yellow focus:shadow-md focus:shadow-primary-yellow",
  };

  return (
    <button type="button" className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}

export default AuthBtn;