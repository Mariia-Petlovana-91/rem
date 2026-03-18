import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Popup, Layout, Loader } from '@/components/common';

const Home = lazy(() => import('@/pages/Home'));
const MyCollection = lazy(() => import('@/pages/MyCollection'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const Profile = lazy(() => import('@/pages/Profile'));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="myCollection" element={<MyCollection />} />

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
