import { useTranslation } from 'react-i18next';

import { NavLink } from 'react-router-dom';

type NavigationProps = {
  onNavigate: () => void;
};

const Navigation = ({ onNavigate }: NavigationProps) => {
  const { t } = useTranslation();
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" onClick={onNavigate}>
            {t('nav.home')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-collection" onClick={onNavigate}>
            {t('nav.myCollection')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
