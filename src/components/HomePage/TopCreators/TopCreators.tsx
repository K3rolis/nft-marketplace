import React, { useEffect, useState } from 'react';
import styles from './TopCreators.module.scss';
import Container from '../../../common/Container/Container';
import userIcon1 from '../../../assets/userIcons/user-icon-1.png';
import userIcon2 from '../../../assets/userIcons/user-icon-2.png';
import userIcon3 from '../../../assets/userIcons/user-icon-3.png';
import userIcon4 from '../../../assets/userIcons/user-icon-4.png';
import userIcon5 from '../../../assets/userIcons/user-icon-5.png';
import userIcon6 from '../../../assets/userIcons/user-icon-6.png';
import userIcon7 from '../../../assets/userIcons/user-icon-7.png';
import userIcon8 from '../../../assets/userIcons/user-icon-8.png';
import userIcon9 from '../../../assets/userIcons/user-icon-9.png';
import userIcon10 from '../../../assets/userIcons/user-icon-10.png';
import userIcon11 from '../../../assets/userIcons/user-icon-11.png';
import userIcon12 from '../../../assets/userIcons/user-icon-12.png';
import Button from '../../../common/Button/Button';
import { ReactComponent as Rocket } from '../../../assets/buttonIcons/rocketLaunch.svg';

const TopCreators = () => {
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

  console.log(screenWidth);

  const HARCODED_DATA = [
    {
      icon: userIcon1,
      name: 'Keepitreal',
      value: '34.53 ETH',
    },
    {
      icon: userIcon2,
      name: 'DigiLab',
      value: '12.57 ETH',
    },
    {
      icon: userIcon3,
      name: 'GravityOne',
      value: '35.84 ETH',
    },
    {
      icon: userIcon4,
      name: 'Juanie',
      value: '24.52 ETH',
    },
    {
      icon: userIcon5,
      name: 'BlueWhale',
      value: '17.65 ETH',
    },
    {
      icon: userIcon6,
      name: 'Mr Fox',
      value: '33.21 ETH',
    },
    {
      icon: userIcon7,
      name: 'Shroomie',
      value: '93.89 ETH',
    },
    {
      icon: userIcon8,
      name: 'Robotica',
      value: '40.61 ETH',
    },
    {
      icon: userIcon9,
      name: 'RustyRobot',
      value: '32.01 ETH',
    },
    {
      icon: userIcon10,
      name: 'Animakid',
      value: '37.77 ETH',
    },
    {
      icon: userIcon11,
      name: 'Dotgu',
      value: '42.17 ETH',
    },
    {
      icon: userIcon12,
      name: 'Ghiblier',
      value: '14.89 ETH',
    },
  ];
  return (
    <Container>
      <div className={styles.headline}>
        <div className={styles.content}>
          <div className={styles.title}> Top creators </div>
          <div className={styles.subtitle}> Checkout Top Rated Creators on the NFT Marketplace</div>
        </div>
        {!isMobile && <Button component={Rocket} title="View Rankings" outline={true} className={styles.test} />}
      </div>

      <div className={styles.cardsWrapper}>
        {HARCODED_DATA.map((data, index) => (
          <div className={styles.card}>
            <div className={styles.imageBox}>
              <img src={data.icon} alt={data.name} />
              <span className={styles.imageIndex}>{++index}</span>
            </div>
            <div className={styles.additionalData}>
              <div className={styles.userName}>{data.name}</div>
              <div className={styles.totalSales}>
                <span className={styles.highlight}>Total Sales:</span> {data.value}
              </div>
            </div>
          </div>
        ))}
        {isMobile && <Button component={Rocket} title="View Rankings" outline={true} className={styles.test} />}
      </div>
    </Container>
  );
};

export default TopCreators;
