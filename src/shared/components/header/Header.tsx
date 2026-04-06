import logo from '/logo.webp';
import { Language, Theme, MobileMenuBtn, DropdownNav } from '@/shared/components';
import { Auth } from '@/features/auth';

const Header = () => {
  return (
    <header className="p-2 md:p-4 lg:p-6 border-b border-primary-yellow flex items-center justify-between">
      <a href="/" aria-label="Home" className="outline-none">
        <img
          src={logo}
          alt="logo"
          className="w-28 md:w-36 lg:w-48 h-auto"
          width={300}
          height={200}
          loading="eager"
          decoding="async"
        />
      </a>

      <div className="flex items-center gap-3">
        <DropdownNav />
        <Language />
        <Theme />
        <Auth />
        <MobileMenuBtn />
      </div>
    </header>
  );
};

export default Header;
