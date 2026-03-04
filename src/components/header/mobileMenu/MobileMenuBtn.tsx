import { useDispatch } from 'react-redux';

import { IoMenu } from 'react-icons/io5';
import { openPopup } from '../../../redux/popup/slice';

const MobileMenuBtn = () => {
const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="icon-btn group block md:hidden"
      aria-label="Open mobile menu"
      onClick={()=>{dispatch(openPopup("MOBILE_MENU"))}}
    >
      <IoMenu className="icon" />
    </button>
  );
};

export default MobileMenuBtn;
