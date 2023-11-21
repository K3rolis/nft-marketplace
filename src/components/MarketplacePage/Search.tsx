import React, { useState } from 'react';
import styles from './Search.module.scss';
import searchIcon from '../../assets/utils/magnifyingGlass.svg';
import Container from '../../common/Container/Container';

import nftImage1 from '../../assets/NFTS/NFT-13.png';
import nftImage2 from '../../assets/NFTS/NFT-14.png';
import nftImage3 from '../../assets/NFTS/NFT-15.png';
import nftImage4 from '../../assets/NFTS/NFT-16.png';
import nftImage5 from '../../assets/NFTS/NFT-12.png';
import nftImage6 from '../../assets/NFTS/NFT-17.png';
import nftImage7 from '../../assets/NFTS/NFT-7.png';
import nftImage8 from '../../assets/NFTS/NFT-6.png';
import nftImage9 from '../../assets/NFTS/NFT-11.png';
import nftImage10 from '../../assets/NFTS/NFT-1.png';
import nftImage11 from '../../assets/NFTS/NFT-2.png';
import nftImage12 from '../../assets/NFTS/NFT-3.png';

import userIcon1 from '../../assets/userIcons/user-icon-1.png';
import userIcon2 from '../../assets/userIcons/user-icon-2.png';
import userIcon3 from '../../assets/userIcons/user-icon-3.png';
import userIcon4 from '../../assets/userIcons/user-icon-4.png';
import userIcon5 from '../../assets/userIcons/user-icon-5.png';
import userIcon6 from '../../assets/userIcons/user-icon-6.png';
import userIcon7 from '../../assets/userIcons/user-icon-7.png';
import userIcon8 from '../../assets/userIcons/user-icon-8.png';
import userIcon9 from '../../assets/userIcons/user-icon-9.png';
import userIcon10 from '../../assets/userIcons/user-icon-10.png';

import NFTCard, { NFTCardProps } from '../NFTCard/NFTCard';

const Search = () => {
  const [toggledTab, setToggledTab] = useState(0);
  const [searchInput, setSearchInput] = useState<string>('');

  const toggleTab = (index: number) => {
    setToggledTab(index);
  };

  const HARDCODED_DATA_NFTs: NFTCardProps[] = [
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
      userIcon: userIcon10,
      userName: 'SpaceOne',
      price: '3.99 ETH',
      highestBid: '0.58 wETH',
    },
    {
      nftImage: nftImage4,
      nftTitle: 'CryptoCity',
      userIcon: userIcon4,
      userName: 'MoonDancer',
      price: '1.63 ETH',
      highestBid: '0.33 wETH',
    },
    {
      nftImage: nftImage5,
      nftTitle: 'ColorfulDog 0524',
      userIcon: userIcon5,
      userName: 'NebulaKid',
      price: '1.83 ETH',
      highestBid: '1.99 wETH',
    },
    {
      nftImage: nftImage6,
      nftTitle: 'Space Tales',
      userIcon: userIcon6,
      userName: 'SpaceOne',
      price: '3.99 ETH',
      highestBid: '0.58 wETH',
    },
    {
      nftImage: nftImage7,
      nftTitle: 'Cherry Blossom Girl 037',
      userIcon: userIcon7,
      userName: 'MoonDancer',
      price: '1.63 ETH',
      highestBid: '0.33 wETH',
    },
    {
      nftImage: nftImage8,
      nftTitle: 'Dancing Robots 0987',
      userIcon: userIcon8,
      userName: 'NebulaKid',
      price: '1.83 ETH',
      highestBid: '1.99 wETH',
    },
    {
      nftImage: nftImage9,
      nftTitle: 'IceCream Ape ',
      userIcon: userIcon9,
      userName: 'SpaceOne',
      price: '3.99 ETH',
      highestBid: '0.58 wETH',
    },
  ];

  const HARDCODED_DATA_COLLECTIONS: NFTCardProps[] = [
    {
      nftImage: nftImage10,
      nftTitle: 'Magic Mushroom 0325',
      userIcon: userIcon3,
      userName: 'Animakid',
      price: '1.63 ETH',
      highestBid: '0.33 wETH',
    },
    {
      nftImage: nftImage11,
      nftTitle: 'Happy Robot 032',
      userIcon: userIcon3,
      userName: 'Animakid',
      price: '1.83 ETH',
      highestBid: '1.99 wETH',
    },
    {
      nftImage: nftImage12,
      nftTitle: 'Happy Robot 024',
      userIcon: userIcon3,
      userName: 'Animakid',
      price: '3.99 ETH',
      highestBid: '0.58 wETH',
    },
  ];

  const filteredData = (data: NFTCardProps[]): NFTCardProps[] => {
    return data.filter((objectVariable) => objectVariable.nftTitle.toLowerCase().includes(searchInput));
  };

  return (
    <Container className={styles.container}>
      <div className={styles.headline}>
        <div className={styles.title}>Browse Marketplace</div>
        <div className={styles.subtitle}>Browse through more than 50k NFTs on the NFT Marketplace.</div>
      </div>

      <div className={styles.searchBar}>
        <input type="text" placeholder="Search your favourite NFTs" className={styles.searchInput} onChange={(e) => setSearchInput(e.target.value.toLowerCase())} />
        <img src={searchIcon} alt="search icon" className={styles.icon} />
      </div>

      <div className={styles.tabs}>
        <div className={`${styles.tab} ${toggledTab === 0 ? styles.activeTab : ''}`} onClick={() => toggleTab(0)}>
          NFTs
          {HARDCODED_DATA_NFTs.length ? (
            <span className={`${toggledTab === 0 ? styles.activeTag : styles.tag}`}> {filteredData(HARDCODED_DATA_NFTs).length} </span>
          ) : (
            <span className={styles.tag}>0</span>
          )}
        </div>

        <div className={`${styles.tab} ${toggledTab === 1 ? styles.activeTab : ''}`} onClick={() => toggleTab(1)}>
          Collections
          {HARDCODED_DATA_COLLECTIONS.length ? (
            <span className={`${toggledTab === 1 ? styles.activeTag : styles.tag}`}> {filteredData(HARDCODED_DATA_COLLECTIONS).length} </span>
          ) : (
            <span className={styles.tag}>0</span>
          )}
        </div>

        <span className={styles.glider} style={{ left: `${(100 / 2) * toggledTab}%` }}></span>
      </div>

      <div className={styles.contentTabs}>
        {toggledTab === 0 && (
          <div className={styles.content}>
            {filteredData(HARDCODED_DATA_NFTs).length ? filteredData(HARDCODED_DATA_NFTs).map((data, index) => <NFTCard {...data} key={index} />) : <div>Results not found</div>}
          </div>
        )}
        {toggledTab === 1 && (
          <div className={styles.content}>
            {filteredData(HARDCODED_DATA_COLLECTIONS).length ? filteredData(HARDCODED_DATA_COLLECTIONS).map((data, index) => <NFTCard {...data} key={index} />) : <div>Results not found</div>}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Search;
