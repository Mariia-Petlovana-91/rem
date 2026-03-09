import { useEffect } from 'react';

export const useEscape = (handler: () => void, active = true) => {
  useEffect(() => {
    if (!active) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handler();
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [handler, active]);
};
