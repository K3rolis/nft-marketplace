import React from 'react';
import HeroSection from '../../components/HomePage/HeroSection/HeroSection';
import NFTTrendingCollection from '../../components/HomePage/NFTTrendingCollection/NFTTrendingCollection';
import TopCreators from '../../components/HomePage/TopCreators/TopCreators';
import Categories from '../../components/HomePage/Categories/Categories';
import RelatedNFTs from '../../components/HomePage/RelatedNFTs/RelatedNFTs';
import NFTHighlight from '../../components/HomePage/NFTHighlight/NFTHighlight';
import HowItWorks from '../../components/HomePage/HowItWorks/HowItWorks';
import styles from './HomePage.module.scss';
import SubscribeWidget from '../../components/HomePage/SubscribeWidget/SubscribeWidget';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <HeroSection />
      <NFTTrendingCollection />
      <TopCreators />
      <Categories />
      <RelatedNFTs />
      <NFTHighlight />
      <HowItWorks />
      <SubscribeWidget />
    </div>
  );
};

export default HomePage;
