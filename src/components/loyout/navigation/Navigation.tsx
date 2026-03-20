import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import type { MouseEventHandler } from 'react';

type NavigationProps = {
  onNavigate: MouseEventHandler<HTMLAnchorElement>;
};

const Navigation = ({ onNavigate }: NavigationProps) => {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold text-center transition-colors duration-300 ${isActive ? 'text-primary-yellow' : 'text-text hover:text-secondary-cyan focus:text-secondary-cyan'}`;

  const { t } = useTranslation();
  return (
    <nav>
      <ul>
        <li className="text-center pb-2 ">
          <NavLink to="/" onClick={onNavigate} className={navClass}>
            {t('nav.home')}
          </NavLink>
        </li>
        <li className="text-center pb-2">
          <NavLink to="/my-collection" onClick={onNavigate} className={navClass}>
            {t('nav.myCollection')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
