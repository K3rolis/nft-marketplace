import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../common/Layout/Layout';
import { routes } from './routes';
import { HomePage } from '../pages/HomePage/HomePage';

const Router = () => {
  const getRoutes = () => {
    return (
      <>
        <Route path={routes.homepage} element={<HomePage />} />
      </>
    );
  };

  return (
    <BrowserRouter basename="/">
      <Layout>
        <Routes>{getRoutes()}</Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
