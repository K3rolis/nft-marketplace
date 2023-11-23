import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../common/Layout/Layout';
import { routes } from './routes';
import Loader from '../components/Utils/Loader/Loader';

const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'));
const SignUpPage = React.lazy(() => import('../pages/CreateAccount/CreateAccount'));
const ArtistPage = React.lazy(() => import('../pages/ArtistPage/ArtistPage'));
const NFTPage = React.lazy(() => import('../pages/NFTPage/NFTPage'));
const MarketplacePage = React.lazy(() => import('../pages/MarketplacePage/MarketplacePage'));
const RankingsPage = React.lazy(() => import('../pages/RankingsPage/RankingsPage'));
const ConnectWalletPage = React.lazy(() => import('../pages/ConnectWalletPage/ConnectWalletPage'));

const Router = () => {
  const getRoutes = () => {
    return (
      <>
        <Route path={routes.homepage} element={<HomePage />} />
        <Route path={routes.signup} element={<SignUpPage />} />
        <Route path={routes.artist} element={<ArtistPage />} />
        <Route path={routes.nftpage} element={<NFTPage />} />
        <Route path={routes.marketplace} element={<MarketplacePage />} />
        <Route path={routes.rankings} element={<RankingsPage />} />
        <Route path={routes.connectWallet} element={<ConnectWalletPage />} />
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
