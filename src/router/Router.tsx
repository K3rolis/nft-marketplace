import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../common/Layout/Layout';
import { routes } from './routes';
import Loader from '../components/Utils/Loader/Loader';
// import { HomePage } from '../pages/HomePage/HomePage';
// import CreateAccount from '../pages/CreateAccount/CreateAccount';

const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'));
const SignUpPage = React.lazy(() => import('../pages/CreateAccount/CreateAccount'));

const Router = () => {
  const getRoutes = () => {
    return (
      <>
        <Route path={routes.homepage} element={<HomePage />} />
        <Route path={routes.signup} element={<SignUpPage />} />
      </>
    );
  };

  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter basename="/">
        <Layout>
          <Routes>{getRoutes()}</Routes>
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
