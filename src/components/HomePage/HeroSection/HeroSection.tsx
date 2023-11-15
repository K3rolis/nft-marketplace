import React from 'react';
import styles from './HeroSection.module.scss';
import heroImage from '../../../assets/utils/heroImage.png';
import heroIcon from '../../../assets/icons/heroSectionIcon.png';
import rocketIcon from '../../../assets/icons/rocketLaunch.svg';
import Container from '../../../common/Container/Container';

const HeroSection = () => {
  return (
    <Container className={styles.container}>
      <div className={styles.headline}>
        <div className={styles.title}>Discover digital art & Collect NFTs</div>
        <div className={styles.subtitle}> NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardImageBox}>
          <img src={heroImage} alt="hero" className={styles.cardImage} />
        </div>
        <div className={styles.cardContent}>
          <div className={styles.title}> Space Walking</div>
          <div className={styles.additionalData}>
            <img src={heroIcon} alt="hero icon" className={styles.icon} />
            <div className={styles.name}> Animakid</div>
          </div>
        </div>
      </div>
      <div className={styles.buttonBox}>
        <img src={rocketIcon} alt="rocket icon" className={styles.buttonIcon} />
        <div className={styles.buttonTitle}>Get Started</div>
      </div>
      <div className={styles.additionalDataBox}>
        <div className={styles.additionalData}>
          <div className={styles.title}> 240k+</div>
          <div className={styles.subtitle}>Total Sale</div>
        </div>

        <div className={styles.additionalData}>
          <div className={styles.title}> 100k+</div>
          <div className={styles.subtitle}>Auctions</div>
        </div>

        <div className={styles.additionalData}>
          <div className={styles.title}> 240k+</div>
          <div className={styles.subtitle}>Artists</div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
