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
  console.log(randomItem);

  return (
    <div className="max-w-64">
      <p className="text-secondary-cyan text-xs font-bold text-center md:text-base">
        {t(randomItem.textKey)}
      </p>
      <picture>
        <source media="(min-width: 768px)" srcSet={randomItem.desktop} />
        <img
          className="block mx-auto w-[100px] h-[100px] md:w-[140px] md:h-[140px]"
          src={randomItem.mobile}
          alt="Cat picture random"
        />
      </picture>
    </div>
  );
};

export default Cat;
