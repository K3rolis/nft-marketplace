import React, { useEffect, useState } from 'react';
import styles from './UserRankings.module.scss';
import Container from '../../common/Container/Container';
import UserRankingCard from './UserRankingCard/UserRankingCard';

import userIcon1 from '../../assets/userIcons/user-icon-4.png';
import userIcon2 from '../../assets/userIcons/user-icon-5.png';
import userIcon3 from '../../assets/userIcons/user-icon-6.png';
import userIcon4 from '../../assets/userIcons/user-icon-7.png';
import userIcon5 from '../../assets/userIcons/user-icon-8.png';

const UserRankings = () => {
  const [toggledTab, setToggledTab] = useState(0);

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

  const toggleTab = (index: number) => {
    setToggledTab(index);
  };

  const HARDCODED_DATA = [
    { icon: userIcon1, user: 'Marcus Saris', change: '+1.41%', nftsSold: 602, volume: '12.4 ETH' },
    { icon: userIcon2, user: 'Alfonso Bator', change: '-1.41%', nftsSold: 602, volume: '12.4 ETH' },
    { icon: userIcon3, user: 'Nolan Mango', change: '-1.41%', nftsSold: 602, volume: '12.4 ETH' },
    { icon: userIcon4, user: 'Nolan Mango', change: '+1.41%', nftsSold: 602, volume: '12.4 ETH' },
    { icon: userIcon5, user: 'Miracle Gouse', change: '-1.41%', nftsSold: 602, volume: '12.4 ETH' },
    { icon: userIcon1, user: 'Alena Septimus', change: '+1.41%', nftsSold: 602, volume: '12.4 ETH' },
    { icon: userIcon2, user: 'Desirae Lipshutz', change: '+1.41%', nftsSold: 602, volume: '12.4 ETH' },
    { icon: userIcon3, user: 'Paityn Kenter', change: '+1.41%', nftsSold: 602, volume: '12.4 ETH' },
    { icon: userIcon4, user: 'Alena Vaccaro', change: '-1.41%', nftsSold: 602, volume: '12.4 ETH' },
    { icon: userIcon5, user: 'Randy Carder', change: '+1.41%', nftsSold: 602, volume: '12.4 ETH' },
    { icon: userIcon1, user: 'Hanna Culhane', change: '+1.41%', nftsSold: 602, volume: '12.4 ETH' },
    { icon: userIcon2, user: 'Jocelyn Workman', change: '+1.41%', nftsSold: 602, volume: '12.4 ETH' },
    { icon: userIcon3, user: 'Desirae Septimus', change: '+1.41%', nftsSold: 602, volume: '12.4 ETH' },
    { icon: userIcon4, user: 'Ahmad Franci', change: '+1.41%', nftsSold: 602, volume: '12.4 ETH' },
  ];

  return (
    <Container>
      <div className={styles.headline}>
        <div className={styles.title}>Top Creators</div>
        <div className={styles.subtitle}>Check out top ranking NFT artists on the NFT Marketplace.</div>
      </div>

      <div className={styles.tabs}>
        <div className={`${styles.tab} ${toggledTab === 0 ? styles.activeTab : ''}`} onClick={() => toggleTab(0)}>
          {isMobile ? '1d' : 'Today'}
        </div>

        <div className={`${styles.tab} ${toggledTab === 1 ? styles.activeTab : ''}`} onClick={() => toggleTab(1)}>
          {isMobile ? '7d' : 'This Week'}
        </div>

        <div className={`${styles.tab} ${toggledTab === 2 ? styles.activeTab : ''}`} onClick={() => toggleTab(2)}>
          {isMobile ? '30d' : 'This month'}
        </div>

        <div className={`${styles.tab} ${toggledTab === 3 ? styles.activeTab : ''}`} onClick={() => toggleTab(3)}>
          All Time
        </div>

        <span className={styles.glider} style={{ left: `${25 * toggledTab}%` }}></span>
      </div>

      <div className={styles.contentTabs}>
        <div className={styles.rankingsHeader}>
          <div className={styles.artistRank}>
            <div className={styles.index}>#</div>
            <div className={styles.user}>Artist</div>
          </div>
          <div className={styles.artistStats}>
            <div className={styles.change}>Change</div>
            <div className={styles.sold}>NFTs Sold</div>

            <div className={styles.volume}>Volume</div>
          </div>
        </div>

        {toggledTab === 0 && (
          <div className={styles.cards}>{HARDCODED_DATA ? HARDCODED_DATA.map((data, index) => <UserRankingCard {...data} key={index} index={++index} />) : <div>Results not found</div>}</div>
        )}

        {toggledTab === 1 && (
          <div className={styles.cards}>{HARDCODED_DATA ? HARDCODED_DATA.reverse().map((data, index) => <UserRankingCard {...data} key={index} index={++index} />) : <div>Results not found</div>}</div>
        )}

        {toggledTab === 2 && (
          <div className={styles.cards}>{HARDCODED_DATA ? HARDCODED_DATA.map((data, index) => <UserRankingCard {...data} key={index} index={++index} />) : <div>Results not found</div>}</div>
        )}

        {toggledTab === 3 && (
          <div className={styles.cards}>{HARDCODED_DATA ? HARDCODED_DATA.reverse().map((data, index) => <UserRankingCard {...data} key={index} index={++index} />) : <div>Results not found</div>}</div>
        )}
      </div>
    </Container>
  );
};

export default UserRankings;
