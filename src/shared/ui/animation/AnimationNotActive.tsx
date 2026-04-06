import { useTranslation } from 'react-i18next';
import { useChangeIndex } from '@/hooks/useChangeIndex';

import img1 from '@/img/anime/animeSleep1.png';
import img2 from '@/img/anime/animeSleep2.png';
import img3 from '@/img/anime/animeSleep3.png';

const AnimationNotActive = () => {
  const images = [img1, img2, img3];
  const { t } = useTranslation();
  const texts = [t('anime.text1'), t('anime.text2'), t('anime.text3')];
  const currentImg = useChangeIndex(images);
  const currentText = useChangeIndex(texts);
  return (
    <div className="h-[400px] flex flex-col  items-center justify-between">
      <p className="pt-2 text-text transition-all duration-500 animate-fade">
        {currentText}
      </p>
      <img
        key={currentImg}
        src={currentImg}
        alt="Loading"
        width="200"
        height="200"
        className="block  transition-all duration-500 opacity-100 scale-100 animate-pop"
      />
    </div>
  );
};

export default AnimationNotActive;
