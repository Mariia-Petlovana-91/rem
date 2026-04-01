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
    <div>
      <picture>
        <source media="(min-width: 767px)" srcSet={randomItem.mobile} />
        <img src={randomItem.desktop} alt="Cat picture random" />
      </picture>
      <p>{t(randomItem.textKey)}</p>
    </div>
  );
};

export default Cat;
