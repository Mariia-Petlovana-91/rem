import { IoMoon } from 'react-icons/io5';
import { MdSunny } from 'react-icons/md';

const Theme = () => {
  return (
    <>
      <button
        type="button"
        className="icon-btn  group"
        aria-label="Switch to light theme"
      >
        <IoMoon
          className="icon
  "
        />
      </button>
      <button
        type="button"
        className="icon-btn group"
        aria-label="Switch to dark theme"
      >
        <MdSunny
          className="
  icon
  "
        />
      </button>
    </>
  );
};

export default Theme;
