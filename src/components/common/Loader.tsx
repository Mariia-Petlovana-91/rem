import { useTranslation } from 'react-i18next';
import { useChangeIndex } from '@/hooks/useChangeIndex';

import img1 from '@/img/loader/cook1.png';
import img2 from '@/img/loader/cook2.png';
import img3 from '@/img/loader/cook3.png';

const Loader = () => {
  const images = [img1, img2, img3];

  const { t } = useTranslation();
  const texts = [t('anime.text1'), t('anime.text2'), t('anime.text3')];

  const currentImg = useChangeIndex(images);
  const currentText = useChangeIndex(texts);

  return (
    <div className="h-[200px]">
      <p className="pb-2 text-center text-text transition-all duration-500 animate-fade">{currentText}</p>

      <img
        key={currentImg}
        src={currentImg}
        alt="Loading"
        width="120"
        height="120"
        className="block mx-auto transition-all duration-500 opacity-100 scale-100 animate-pop"
      />
    </div>
  );
};

export default Loader;
