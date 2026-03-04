import { useDispatch, useSelector } from 'react-redux';

import { IoMoon } from 'react-icons/io5';
import { MdSunny } from 'react-icons/md';

import type { RootState } from '../../redux/store';
import { toggleTheme } from '../../redux/theme/slice';
import { applyTheme } from '../../utils/applyTheme';

const Theme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.themeData.theme);

  const handleToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    dispatch(toggleTheme());
    applyTheme(newTheme);
  };

  return (
    <>
      <button
        type="button"
        className="icon-btn  group"
        aria-label="Switch to light theme"
        onClick={handleToggle}
      >
        {theme === 'light' ? (
          <IoMoon className="icon" />
        ) : (
          <MdSunny className="icon" />
        )}
      </button>
    </>
  );
};

export default Theme;
