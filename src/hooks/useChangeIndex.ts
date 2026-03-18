import type { Arr } from '@/types/base';

import { useState, useEffect } from 'react';

export const useChangeIndex = (arr: Arr) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!arr?.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % arr.length);
    }, 1200);

    return () => clearInterval(interval);
  }, [arr]);

  return arr[index];
};
