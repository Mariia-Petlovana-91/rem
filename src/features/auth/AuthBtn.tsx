import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { openPopup } from '@/redux/popup/slice';

const AuthBtn = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-start gap-2">
      <button
        type="button"
        className="btn btnYellow mb-2 md:mb-0 md:mr-2"
        onClick={() => dispatch(openPopup('LOGIN'))}
      >
        {t('buttons.signup')}
      </button>
      <button type="button" className="btn btnCyan" onClick={() => dispatch(openPopup('SIGNUP'))}>
        {t('buttons.signin')}
      </button>
    </div>
  );
};

export default AuthBtn;
