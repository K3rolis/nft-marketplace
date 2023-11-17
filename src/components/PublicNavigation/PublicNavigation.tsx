import React from 'react';
import styles from './PublicNavigation.module.scss';
import logoImage from '../../assets/icons/logo.svg';
import Button from '../../common/Button/Button';
import { ReactComponent as profileIcon } from '../../assets/buttonIcons/user.svg';

const PublicNavigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoBox}>
        <img src={logoImage} alt="logo" className={styles.logoImage} />
        <div className={styles.logoText}>NFT Marketplace</div>
      </div>
      <div className={styles.hamburger}>
        <div className={styles.burger}></div>
        <div className={`${styles.burger} ${styles.burgerLong}`}></div>
        <div className={styles.burger}></div>
      </div>
      <div className={styles.navigationLinks}>
        <ul>
          <li>Marketplace</li>
          <li>Rankings</li>
          <li>Connect a wallet</li>
          <li>
            <Button title={'Sign up'} component={profileIcon}></Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PublicNavigation;