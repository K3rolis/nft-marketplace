import React from 'react';
import styles from './RelatedNFTCards.module.scss';
import Container from '../../../common/Container/Container';
import Button from '../../../common/Button/Button';
import { routes } from '../../../router/routes';
import { Link } from 'react-router-dom';

import { ReactComponent as arrowIcon } from '../../../assets/buttonIcons/arrowRight.svg';

import nftImage1 from '../../../assets/NFTS/NFT-2.png';
import nftImage2 from '../../../assets/NFTS/NFT-3.png';
import nftImage3 from '../../../assets/NFTS/NFT-4.png';
import nftImage4 from '../../../assets/NFTS/NFT-5.png';
import nftImage5 from '../../../assets/NFTS/NFT-6.png';
import nftImage6 from '../../../assets/NFTS/NFT-7.png';

import userIcon1 from '../../../assets/userIcons/user-icon-1.png';
import userIcon2 from '../../../assets/userIcons/user-icon-2.png';
import userIcon3 from '../../../assets/userIcons/user-icon-3.png';
import userIcon4 from '../../../assets/userIcons/user-icon-4.png';
import userIcon5 from '../../../assets/userIcons/user-icon-5.png';
import userIcon6 from '../../../assets/userIcons/user-icon-6.png';
import NFTCard, { NFTCardProps } from '../../NFTCard/NFTCard';

const RelatedNFTCards = () => {
  const HARDCODED_DATA: NFTCardProps[] = [
    {
      nftImage: nftImage1,
      nftTitle: 'Happy Robot 032',
      userIcon: userIcon1,
      userName: 'MoonDancer',
      price: '1.63 ETH',
      highestBid: '0.33 wETH',
    },
    {
      nftImage: nftImage2,
      nftTitle: 'Happy Robot 024',
      userIcon: userIcon2,
      userName: 'NebulaKid',
      price: '1.83 ETH',
      highestBid: '1.99 wETH',
    },
    {
      nftImage: nftImage3,
      nftTitle: 'Designer Bear',
      userIcon: userIcon3,
      userName: 'SpaceOne',
      price: '3.99 ETH',
      highestBid: '0.58 wETH',
    },
    {
      nftImage: nftImage4,
      nftTitle: 'Colorful Dog 0356',
      userIcon: userIcon4,
      userName: 'MoonDancer',
      price: '1.63 ETH',
      highestBid: '0.33 wETH',
    },
    {
      nftImage: nftImage5,
      nftTitle: 'Dancing Robot 03124',
      userIcon: userIcon5,
      userName: 'NebulaKid',
      price: '1.83 ETH',
      highestBid: '1.99 wETH',
    },
    {
      nftImage: nftImage6,
      nftTitle: 'Cherry Blossom Girl 035',
      userIcon: userIcon6,
      userName: 'SpaceOne',
      price: '3.99 ETH',
      highestBid: '0.58 wETH',
    },
  ];
  return (
    <Container>
      <div className={styles.headline}>
        <div className={styles.title}>More from this artist</div>
        <Link to={routes.artist} className={styles.tabletButton}>
          <Button title="Go to Artist Page" outline={true} component={arrowIcon} className={styles.button} />
        </Link>
      </div>
      <div className={styles.cards}>{HARDCODED_DATA ? HARDCODED_DATA.map((data) => <NFTCard {...data} />) : <div> Results not found</div>}</div>
      <Link to={routes.artist} className={styles.mobileButtonBox}>
        <Button title="Go to Artist Page" outline={true} component={arrowIcon} className={styles.mobileButton} />
      </Link>
    </Container>
  );
};

export default RelatedNFTCards;
