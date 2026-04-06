import { useTranslation } from 'react-i18next';
import luluImgMob from '@/img/heromob.png';
import luluImgDesk from '@/img/herodesk.png';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className=" md:flex items-center justify-center">
      <h1 className="sr-only">{t('hero.title')}</h1>
      <picture className="block mb-4 md:mb-0 ">
        <source media="(min-width:768px)" srcSet={luluImgDesk} />
        <img
          className="block mx-auto w-full max-w-[280px] md:max-w-[480px] h-auto "
          loading="eager"
          decoding="async"
          src={luluImgMob}
          alt="cat Lulu"
        />
      </picture>
      <div className="max-w-[600px] mx-auto md:mx-0">
        <p className="text-text text-center text-xs md:text-sm lg:text-base mb-4">{t('hero.message')}</p>
        <button className="block mx-auto btn btnYellow w-full max-w-[600px] p-4" type="button">
          {t('buttons.startCooking')}
        </button>
      </div>
    </div>
  );
};

export default Hero;
