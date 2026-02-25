import { IoMenu } from 'react-icons/io5';

const MobileMenu = () => {
  return (
    <button
      type="button"
      className="icon-btn group block md:hidden"
      aria-label="Open mobile menu"
    >
      <IoMenu className="icon" />
    </button>
  );
};

export default MobileMenu;
