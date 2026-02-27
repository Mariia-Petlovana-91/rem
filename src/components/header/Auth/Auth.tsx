import AuthBtn from "./AuthBtn";

const Menu = () => {
  return (
    <div className="hidden md:block">
      <AuthBtn variant="yellow">Sign in</AuthBtn>
      <AuthBtn variant="cyan">Sign up</AuthBtn>
    </div>
  );
};

export default Menu;
