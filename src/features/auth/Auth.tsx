import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { openPopup } from '@/redux/popup/slice';
import AuthBtn from './AuthBtn';

const Auth = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div className="hidden md:block">
      <AuthBtn variant="yellow" onClick={() => dispatch(openPopup('LOGIN'))}>
        {t('buttons.signin')}
      </AuthBtn>
      <AuthBtn variant="cyan" onClick={() => dispatch(openPopup('SIGNUP'))}>
        {t('buttons.signup')}
      </AuthBtn>
    </div>
  );
};

export default Auth;
