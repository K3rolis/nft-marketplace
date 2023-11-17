import React from 'react';
import HeroSection from '../../components/HomePage/HeroSection/HeroSection';
import NFTTrendingCollection from '../../components/HomePage/NFTTrendingCollection/NFTTrendingCollection';
import TopCreators from '../../components/HomePage/TopCreators/TopCreators';
import Categories from '../../components/HomePage/Categories/Categories';

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <NFTTrendingCollection />
      <TopCreators />
      <Categories />
    </>
  );
};
