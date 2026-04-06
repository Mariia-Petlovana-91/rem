import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Popup, Loader } from '@/shared/components';
import { MainLoyout } from '@/loyouts';

const Home = lazy(() => import('@/pages/home/Home'));
const MyCollection = lazy(() => import('@/pages/MyCollection'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const Profile = lazy(() => import('@/pages/Profile'));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainLoyout />}>
            <Route index element={<Home />} />
            <Route path="my-collection" element={<MyCollection />} />

            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Popup />
    </>
  );
};

export default App;
