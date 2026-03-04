import { useTranslation } from 'react-i18next';
import sleep from '../../img/sleep.png';

const NotActive = () => {
  const { t } = useTranslation();
  return (
    <div className="p-4 max-w-[600px] mx-auto ">
      <p className="text-secondary-cyan text-lg font-bold text-center">
        {t('slep')}
      </p>
      <img
        src={sleep}
        alt="the cat is sleeping"
        className="max-w-full max-h-[400px] mx-auto"
      />
    </div>
  );
};

export default NotActive;
