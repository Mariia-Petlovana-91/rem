import { useTranslation } from 'react-i18next';

const img = '/images/catkoc.png';

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-bg min-h-screen flex flex-col         items-center justify-around">
      <p className="text-primary-yellow text-[48px] md:text-[64px] font-bold text-center">404</p>
     <div className='border border-primary-yellow rounded-lg p-4 '> 
       <p className='text-center text-text'>{t('notExistPage')}</p>
       <img
        className="block mx-auto w-full max-w-[100px] md:max-w-[240px] h-auto"
        src={img}
        alt="The cat sits wrapped in a blanket"
       />
      </div>
    </div>
  );
};

export default NotFound;
