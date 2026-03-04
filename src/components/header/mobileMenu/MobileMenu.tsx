import { useDispatch } from 'react-redux';

import AuthBtn from '../auth/AuthBtn';
import { openPopup } from '../../../redux/popup/slice';

const MobileMenu = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-full h-[400px] z-51 block md:hidden">
      <AuthBtn variant="yellow" onClick={() => dispatch(openPopup('LOGIN'))}>
        Sign in
      </AuthBtn>
      <AuthBtn variant="cyan" onClick={() => dispatch(openPopup('SIGNUP'))}>
        Sign up
      </AuthBtn>
    </div>
  );
};

export default MobileMenu;
