import React, { ReactNode } from 'react';
import PublicNavigation from '../../components/PublicNavigation/PublicNavigation';
import Footer from '../../components/Utils/Footer/Footer';

export type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <PublicNavigation />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
