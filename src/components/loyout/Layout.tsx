import { Outlet } from 'react-router-dom';

import { Header, Footer } from '@/components/loyout';
import { Container } from '@/components/common';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)]">
      <Header />
      <main className="flex-1">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
