import React from 'react';
import styles from './HeroSection.module.scss';
import heroImage from '../../../assets/utils/heroImage.png';
import heroIcon from '../../../assets/icons/heroSectionIcon.png';
import { ReactComponent as rocketIcon } from '../../../assets/buttonIcons/rocketLaunch.svg';
import Container from '../../../common/Container/Container';
import Button from '../../../common/Button/Button';
import { Link } from 'react-router-dom';
import { routes } from '../../../router/routes';

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
      <Link to={routes.signup}>
        <Button title="Get Started" component={rocketIcon} />
      </Link>
      <div className={styles.additionalDataBox}>
        <div className={styles.additionalData}>
          <div className={styles.title}> 250k+</div>
          <div className={styles.subtitle}>Volume</div>
        </div>

        <div className={styles.additionalData}>
          <div className={styles.title}> 50+</div>
          <div className={styles.subtitle}>NFTs Sold</div>
        </div>

        <div className={styles.additionalData}>
          <div className={styles.title}> 3000+</div>
          <div className={styles.subtitle}>Followers</div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
