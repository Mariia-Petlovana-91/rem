import i18n from 'i18next';

import { useEscape } from '@/hooks/useEscape';
import type { DropdownProps } from '@/types/dropdown';

const Dropdown = ({ setOpen }: DropdownProps) => {
  useEscape(() => setOpen(false));

  return (
    <ul className="absolute top-full left-1/2 -translate-x-1/2 w-full animate-slideDown">
      <li className="flex justify-center items-center mb-[4px] last:mb-0">
        <button
          type="button"
          className="dropdown-btn-lang"
          onClick={() => {
            i18n.changeLanguage('en');
            setOpen(false);
          }}
        >
          EN
        </button>
      </li>
      <li className="flex justify-center items-center mb-[4px] last:mb-0">
        <button
          type="button"
          className="dropdown-btn-lang"
          onClick={() => {
            i18n.changeLanguage('pl');
            setOpen(false);
          }}
        >
          PL
        </button>
      </li>
      <li className="flex justify-center items-center mb-[4px] last:mb-0">
        <button
          type="button"
          className="dropdown-btn-lang"
          onClick={() => {
            i18n.changeLanguage('ua');
            setOpen(false);
          }}
        >
          UA
        </button>
      </li>
    </ul>
  );
};

export default Dropdown;
