import logo from '/logo.webp';
import { Language, Theme, MobileMenuBtn, DropdownNav } from '@/shared/components';
import { Auth } from '@/features/auth';

const Header = () => {
  return (
    <header className=" border-b border-primary-yellow px-2 md:px-4 lg:px-6 flex items-center justify-between">
      <a href="/" aria-label="Home" className="outline-none">
        <img src={logo} alt="logo" className="w-24 md:w-32 h-auto cursor-pointer" />
      </a>

      <div className="flex items-center gap-3">
        <DropdownNav />
        <Language />
        <Theme />
        <div className="hidden md:block">
          <Auth />
        </div>

        <MobileMenuBtn />
      </div>
    </header>
  );
};

export default Header;
