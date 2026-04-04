import { useTranslation } from 'react-i18next';

import Section from '@/components/common/Section';
import luluImgMob from '@/img/heromob.png';
import luluImgDesk from '@/img/herodesk.png';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <h1 className="hidden">{t('hero.title')}</h1>
      <picture>
        <source media="(min-width:768px)" srcSet={luluImgDesk} />
        <img
          className="block mx-auto w-full max-w-[280px] md:max-w-[600px] h-auto"
          src={luluImgMob}
          alt="cat Lulu"
        />
      </picture>
    </Section>
  );
};

export default Hero;
