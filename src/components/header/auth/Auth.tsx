import { useDispatch } from 'react-redux';
import { openPopup } from '../../../redux/popup/slice';
import AuthBtn from './AuthBtn';

const Auth = () => {
  const dispatch = useDispatch();

  return (
    <div className="hidden md:block">
      <AuthBtn variant="yellow" onClick={() => dispatch(openPopup('LOGIN'))}>
        Sign in
      </AuthBtn>
      <AuthBtn variant="cyan" onClick={() => dispatch(openPopup('SIGNUP'))}>
        Sign up
      </AuthBtn>
    </div>
  );
};

export default Auth;
