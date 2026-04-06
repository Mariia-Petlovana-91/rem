import { Outlet } from 'react-router-dom';

import { Header, Footer } from '@/shared/components';
import { Container } from '@/shared/components';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-bg">
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

export default MainLayout;
