import React, { useState } from 'react';
import styles from './PublicNavigation.module.scss';
import logoImage from '../../assets/icons/logo.svg';
import Button from '../../common/Button/Button';
import { ReactComponent as profileIcon } from '../../assets/buttonIcons/user.svg';
import { routes } from '../../router/routes';
import { Link } from 'react-router-dom';

const PublicNavigation = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <Link to={routes.homepage}>
        <div className={styles.logoBox}>
          <img src={logoImage} alt="logo" className={styles.logoImage} />
          <div className={styles.logoText}>NFT Marketplace</div>
        </div>
      </Link>
      <div className={`${mobileMenu ? styles.toggledHamburger : styles.hamburger}`} onClick={() => setMobileMenu(!mobileMenu)}>
        <div className={styles.burger}></div>
        <div className={`${styles.burger} ${styles.burgerLong}`}></div>
        <div className={styles.burger}></div>
      </div>

      {mobileMenu && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuLinks}>
            <Link to={routes.homepage} onClick={() => setMobileMenu(!mobileMenu)}>
              Home
            </Link>
            <Link to={routes.marketplace} onClick={() => setMobileMenu(!mobileMenu)}>
              Marketplace
            </Link>
            <Link to={routes.rankings} onClick={() => setMobileMenu(!mobileMenu)}>
              Rankings
            </Link>
            <Link to={routes.connectWallet} onClick={() => setMobileMenu(!mobileMenu)}>
              Connect a wallet
            </Link>
            <Link to={routes.signup} onClick={() => setMobileMenu(!mobileMenu)}>
              <Button title="Sign Up" component={profileIcon}></Button>
            </Link>
          </div>
        </div>
      )}

      <div className={styles.navigationLinks}>
        <ul>
          <li>
            <Link to={routes.marketplace}>Marketplace</Link>
          </li>
          <li>
            <Link to={routes.rankings}>Rankings</Link>
          </li>
          <li>
            <Link to={routes.connectWallet}>Connect a wallet</Link>
          </li>
          <li>
            <Link to={routes.signup}>
              <Button title={'Sign up'} component={profileIcon}></Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PublicNavigation;
