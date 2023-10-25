import React from 'react';
import styles from './PublicNavigation.module.scss';
import logoImage from '../../assets/icons/Logo.svg';
import profileIcon from '../../assets/icons/User.svg';

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
          <li className={styles.buttonBox}>
            <>
              <img className={styles.profileImage} src={profileIcon} alt="profileIcon" />
              <div>Sign Up</div>
            </>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PublicNavigation;
