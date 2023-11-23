import React from 'react';
import Container from '../../../common/Container/Container';
import styles from './Footer.module.scss';

import logoImage from '../../../assets/icons/logo.svg';
import SubscribeForm from '../Forms/SubscribeForm/SubscribeForm';

import discordIcon from '../../../assets/social/discord.svg';
import youtubeIcon from '../../../assets/social/youtube.svg';
import twitterIcon from '../../../assets/social/twitter.svg';
import instagramIcon from '../../../assets/social/instagram.svg';
import { Link } from 'react-router-dom';
import { routes } from '../../../router/routes';

const SOCIAL_LINKS = [
  { image: discordIcon, title: 'discord', url: 'https://discord.com/' },
  { image: youtubeIcon, title: 'youtube', url: 'https://www.youtube.com/' },
  { image: twitterIcon, title: 'twitter', url: 'https://twitter.com/' },
  { image: instagramIcon, title: 'instagram', url: 'https://www.instagram.com/' },
];

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.footerWrapper}>
          <div className={styles.community}>
            <div className={styles.logoBox}>
              <img src={logoImage} alt="logo" className={styles.logoImage} />
              <div className={styles.logoText}>NFT Marketplace</div>
            </div>
            <div className={styles.additionalText}>NFT marketplace UI created with Anima for Figma.</div>
            <div className={styles.additionalText}>Join our community</div>

            <div className={styles.socialLinks}>
              {SOCIAL_LINKS.map((data, index) => (
                <a href={data.url} key={index} target="_blank" rel="noreferrer noopener">
                  <img src={data.image} className={styles.socialLink} alt={data.title + ' icon'} />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.exploreLinks}>
            <div className={styles.title}>Explore</div>
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
            </ul>
          </div>

          <div className={styles.subscribe}>
            <div className={styles.title}> Join our weekly digest</div>
            <div className={styles.additionalText}>Get exclusive promotions & updates straight to your inbox.</div>

            <SubscribeForm />
          </div>
        </div>
        <div className={styles.copyright}>Ⓒ 2023 NFT marketplace by Kerolis</div>
      </Container>
    </div>
  );
};

export default Footer;
