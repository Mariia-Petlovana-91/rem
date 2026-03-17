import logo from '/logo.png';
import { Language, Theme, Auth, MobileMenuBtn } from '@/components/loyout';
import { Container } from '@/components/common';

const Header = () => {
  return (
    <Container>
      {' '}
      <header className=" bg-[var(--bg)]  border-b border-primary-yellow flex items-center justify-between">
        <a href="/" aria-label="Home" className="outline-none">
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
    </Container>
  );
};

export default Header;
