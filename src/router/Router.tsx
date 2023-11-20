import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../common/Layout/Layout';
import { routes } from './routes';
import Loader from '../components/Utils/Loader/Loader';

const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'));
const SignUpPage = React.lazy(() => import('../pages/CreateAccount/CreateAccount'));
const ArtistPage = React.lazy(() => import('../pages/ArtistPage/ArtistPage'));

const Router = () => {
  const getRoutes = () => {
    return (
      <>
        <Route path={routes.homepage} element={<HomePage />} />
        <Route path={routes.signup} element={<SignUpPage />} />
        <Route path={routes.artist} element={<ArtistPage />} />
      </>
    );
  };

  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter basename={routes.homepage}>
        <Layout>
          <Routes>{getRoutes()}</Routes>
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
