import { useState, useRef } from 'react';
import { MdLanguage } from 'react-icons/md';

import Dropdown from './Dropdown';
import { useClickOutside } from '@/hooks/useClickOutside';

const Language = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useClickOutside(ref, () => setOpen(false), open);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        className="icon-btn group"
        aria-label="Change language"
        onClick={() => setOpen((prev) => !prev)}
      >
        <MdLanguage className="icon" />
      </button>
      {open && <Dropdown setOpen={setOpen} />}
    </div>
  );
};

export default Language;
