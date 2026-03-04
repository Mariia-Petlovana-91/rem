import logo from '/logo.webp';
import Language from './Language';
import Theme from './Theme';
import Auth from './auth/Auth';
import MobileMenuBtn from './mobileMenu/MobileMenuBtn';

const Header = () => {
  return (
    <header className=" bg-[var(--bg)]  border-b border-primary-yellow flex items-center justify-between p-3">
      <a href="/" aria-label="Home">
        <img
          src={logo}
          alt="logo"
          className="w-28 md:w-36 lg:w-48 h-auto"
          width={300}
          height={200}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </a>

      <div className="flex items-center gap-3">
        <Language />
        <Theme />
        <Auth />
        <MobileMenuBtn />
      </div>
    </header>
  );
};

export default Header;
