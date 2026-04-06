import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { useEscape } from '@/hooks/useEscape';
import { useClickOutside } from '@/hooks/useClickOutside';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Navigation from './Navigation';

const DropdownNav = () => {
  const isDesktop = useMediaQuery('(min-width:768px)');
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  useClickOutside(ref, () => setOpen(false), open);
  useEscape(() => setOpen(false), open);

  if (!isDesktop) return null;
  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        className="btn btnCyan"
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls="nav-menu"
        onClick={() => setOpen((prev) => !prev)}
      >
        {t('buttons.menu')}
      </button>
      {open && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-dropdown-bg p-4 rounded-md
                min-w-max
                animate-slideDown"
        >
          <Navigation onNavigate={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default DropdownNav;
