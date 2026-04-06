import { useDispatch } from 'react-redux';

import { Navigation } from '@/shared/components';
import { Auth } from '@/features/auth';
import { closePopup } from '@/redux/popup/slice';
import { Cat } from '@/shared/ui/catBlock';

const MobileMenu = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-full h-full z-51 block md:hidden flex flex-col justify-between">
      <Navigation onNavigate={() => dispatch(closePopup())} />
      <Cat />
      <Auth />
    </div>
  );
};

export default MobileMenu;
