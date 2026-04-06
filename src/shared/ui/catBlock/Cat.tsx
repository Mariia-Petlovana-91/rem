import { useState } from 'react';
import { images } from '@/dataImg';
import { useTranslation } from 'react-i18next';

const getRandomItem = () => {
  const index = Math.floor(Math.random() * images.length);
  return images[index];
};

const Cat = () => {
  const [randomItem] = useState(getRandomItem);
  const { t } = useTranslation();

  return (
    <div className="max-w-64">
      <p className="text-primary-yellow text-xs font-bold text-center md:text-base">
        {t(randomItem.textKey)}
      </p>

      <img
        className="block mx-auto w-full max-w-[100px] md:max-w-[240px] h-auto"
        src={randomItem.desktop}
        alt="Cat picture random"
      />
    </div>
  );
};

export default Cat;
