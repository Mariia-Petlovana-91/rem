import { useState, useRef } from 'react';

import { useEscape } from '@/hooks/useEscape';
import { useClickOutside } from '@/hooks/useClickOutside';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Navigation from './Navigation';

const DropdownNav = () => {
  const isDesktop = useMediaQuery('(min-width:768px)');
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useClickOutside(ref, () => setOpen(false), open);
  useEscape(() => setOpen(false), open);

  if (!isDesktop) return null;
  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        className=""
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls="nav-menu"
        onClick={() => setOpen((prev) => !prev)}
      >
        menu
      </button>
      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-full  animate-slideDown">
          <Navigation onNavigate={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default DropdownNav;
