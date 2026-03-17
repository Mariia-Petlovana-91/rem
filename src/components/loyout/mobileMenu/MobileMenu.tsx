import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { AuthBtn } from '@/components/loyout';
import { openPopup } from '@/redux/popup/slice';

const MobileMenu = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div className="w-full h-[400px] z-51 block md:hidden">
      <AuthBtn variant="yellow" onClick={() => dispatch(openPopup('LOGIN'))}>
        {t('buttons.signin')}
      </AuthBtn>
      <AuthBtn variant="cyan" onClick={() => dispatch(openPopup('SIGNUP'))}>
        {t('buttons.signup')}
      </AuthBtn>
    </div>
  );
};

export default MobileMenu;
