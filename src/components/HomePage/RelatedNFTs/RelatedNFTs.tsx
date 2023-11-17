/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import styles from './RelatedNFTs.module.scss';
import NFTCard from '../../NFTCard/NFTCard';
import Container from '../../../common/Container/Container';

import nftImage1 from '../../../assets/NFTS/NFT-13.png';
import nftImage2 from '../../../assets/NFTS/NFT-14.png';
import nftImage3 from '../../../assets/NFTS/NFT-15.png';

import userIcon1 from '../../../assets/userIcons/user-icon-1.png';
import userIcon2 from '../../../assets/userIcons/user-icon-2.png';
import userIcon3 from '../../../assets/userIcons/user-icon-3.png';
import Button from '../../../common/Button/Button';

import { ReactComponent as eyeIcon } from '../../../assets/buttonIcons/Eye.svg';

const RelatedNFTs = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth <= 700) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [screenWidth]);

  const HARCODED_DATA = [
    {
      nftImage: nftImage1,
      nftTitle: 'Distant Galaxy',
      userIcon: userIcon1,
      userName: 'MoonDancer',
      price: '1.63 ETH',
      highestBid: '0.33 wETH',
    },
    {
      nftImage: nftImage2,
      nftTitle: 'Life of Edena',
      userIcon: userIcon2,
      userName: 'NebulaKid',
      price: '1.83 ETH',
      highestBid: '1.99 wETH',
    },
    {
      nftImage: nftImage3,
      nftTitle: 'AstroFiction',
      userIcon: userIcon3,
      userName: 'SpaceOne',
      price: '3.99 ETH',
      highestBid: '0.58 wETH',
    },
  ];

  return (
    <Container>
      <div className={styles.headline}>
        <div className={styles.content}>
          <div className={styles.title}> Discover More NFTs </div>
          <div className={styles.subtitle}> Explore new trending NFTs</div>
        </div>
        {!isMobile && <Button component={eyeIcon} title="See all" outline={true} className={styles.button} />}
      </div>

      <div className={styles.cards}>
        {HARCODED_DATA.map((data) => (
          <NFTCard {...data} />
        ))}
        {isMobile && <Button component={eyeIcon} title="See all" outline={true} className={styles.button} />}
      </div>
    </Container>
  );
};

export default RelatedNFTs;
