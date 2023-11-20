import React from 'react';
import UserInformation from '../../components/ArtistPage/UserInformation/UserInformation';
import UserNFTs from '../../components/ArtistPage/UserNFTs/UserNFTs';

const ArtistPage = () => {
  return (
    <>
      <UserInformation />
      <UserNFTs />
    </>
  );
};

export default ArtistPage;
