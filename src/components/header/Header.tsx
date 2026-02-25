import logo from '../../img/logo 1.svg';
import Language from './Language';
import Theme from './Theme';
import Auth from './Auth/Auth';
import MobileMenu from './mobileMenu/MobileMenu';

const Header = () => {
  return (
    <header className="border-b border-primary-yellow flex items-center justify-between p-3">
      <a href="/">
        {' '}
        <img
          src={logo}
          alt="logo"
          className="w-28 h-16 md:w-36 md:h-20 lg:w-48 lg:h-28"
        />
      </a>

      <div className="flex items-center gap-3">
        <Language />
        <Theme />
        <Auth />
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
