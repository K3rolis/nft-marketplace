import React from 'react';
import styles from './NFTTrendingCollection.module.scss';
import animals from '../../../assets/trendingCollection/Animals.png';
import mushrooms from '../../../assets/trendingCollection/Mushrooms.png';
import machines from '../../../assets/trendingCollection/Machines.png';

import foxIcon from '../../../assets/userIcons/user-icon-6.png';
import shroomieIcon from '../../../assets/userIcons/user-icon-7.png';
import robotIcon from '../../../assets/userIcons/user-icon-9.png';

import Container from '../../../common/Container/Container';

const NFTTrendingCollection = () => {
  const HARDCODED_DATA = [
    {
      primaryImage: animals,
      innerFirstImage: animals,
      innerSecondaryImage: animals,
      title: 'DSGN Animals',
      icon: foxIcon,
      userName: 'MrFox',
    },
    {
      primaryImage: mushrooms,
      innerFirstImage: mushrooms,
      innerSecondaryImage: mushrooms,
      title: 'Magic Mushrooms',
      icon: shroomieIcon,
      userName: 'Shroomie',
    },
    {
      primaryImage: machines,
      innerFirstImage: machines,
      innerSecondaryImage: machines,
      title: 'Disco Machines',
      icon: robotIcon,
      userName: 'BeKind2Robots',
    },
  ];
  return (
    <Container className={styles.container}>
      <div className={styles.headline}>
        <div className={styles.title}> Trending Collection </div>
        <div className={styles.subtitle}> Checkout our weekly updated trending collection.</div>
      </div>

      <div className={styles.cardsWrapper}>
        {HARDCODED_DATA.map((data) => (
          <div className={styles.card}>
            <div className={styles.mainImage}>
              <img src={data.primaryImage} alt="" className={styles.primaryImage} />
            </div>

            <div className={styles.innerContainer}>
              <div className={styles.imageBox}>
                <img src={data.innerFirstImage} alt="" className={styles.innerImage} />
              </div>
              <div className={styles.imageBox}>
                <img src={data.innerSecondaryImage} alt="" className={styles.innerImage} />
              </div>
              <div className={styles.imageBox}>
                <img src={data.innerSecondaryImage} alt="" className={styles.innerImage} />
              </div>
            </div>

            <div className={styles.cardContent}>
              <div className={styles.title}> {data.title}</div>
              <div className={styles.additionalData}>
                <img src={data.icon} alt={data.userName} className={styles.icon} />
                <div className={styles.name}> {data.userName} </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default NFTTrendingCollection;
