import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Navigation } from '@/shared/components';
import { AuthBtn } from '@/features/auth';
import { openPopup, closePopup } from '@/redux/popup/slice';
import { Cat } from '@/shared/ui/catBlock';

const MobileMenu = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div className="w-full h-full z-51 block md:hidden flex flex-col justify-between">
      <Navigation onNavigate={() => dispatch(closePopup())} />
      <Cat />
      <div className="flex flex-col justifi-center gap-3">
        {' '}
        <AuthBtn variant="yellow" onClick={() => dispatch(openPopup('LOGIN'))}>
          {t('buttons.signin')}
        </AuthBtn>
        <AuthBtn variant="cyan" onClick={() => dispatch(openPopup('SIGNUP'))}>
          {t('buttons.signup')}
        </AuthBtn>
      </div>
    </div>
  );
};

export default MobileMenu;
