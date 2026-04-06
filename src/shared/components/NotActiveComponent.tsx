import { useTranslation } from 'react-i18next';

const NotActiveComponent = () => {
  const { t } = useTranslation();
  return (
    <div className="p-4 max-w-[600px] mx-auto ">
      <p className="text-secondary-cyan text-lg font-bold text-center">{t('notActiv.header')}</p>
    </div>
  );
};

export default NotActiveComponent;
