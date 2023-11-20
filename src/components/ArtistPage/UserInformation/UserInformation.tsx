import React from 'react';
import styles from './UserInformation.module.scss';
import Container from '../../../common/Container/Container';

import background from '../../../assets/utils/artistBackground.png';

import userIcon from '../../../assets/userIcons/user-icon-3.png';
import Button from '../../../common/Button/Button';

import { ReactComponent as copyIcon } from '../../../assets/buttonIcons/copy.svg';
import { ReactComponent as plusIcon } from '../../../assets/buttonIcons/plus.svg';

import globeIcon from '../../../assets/social/globe.svg';
import discordIcon from '../../../assets/social/discord.svg';
import youtubeIcon from '../../../assets/social/youtube.svg';
import twitterIcon from '../../../assets/social/twitter.svg';
import instagramIcon from '../../../assets/social/instagram.svg';

const UserInformation = () => {
  const SOCIAL_LINKS = [
    { image: globeIcon, title: 'global', url: 'https://www.google.com/' },

    { image: discordIcon, title: 'discord', url: 'https://discord.com/' },
    { image: youtubeIcon, title: 'youtube', url: 'https://www.youtube.com/' },
    { image: twitterIcon, title: 'twitter', url: 'https://twitter.com/' },
    { image: instagramIcon, title: 'instagram', url: 'https://www.instagram.com/' },
  ];

  return (
    <div className={styles.profile}>
      <div className={styles.coverProfileWrapper}>
        <img src={background} alt="tower" className={styles.coverProfile} />
        <span className={styles.coverDecoration}></span>
      </div>

      <Container>
        <div className={styles.imageBox}>
          <img className={styles.icon} src={userIcon} alt="" />
        </div>
        <div className={styles.profileInfo}>
          <div className={styles.username}>Animakid</div>

          <div className={styles.buttons}>
            <Button title="0xc0E3...B79C" component={copyIcon} className={styles.button} />
            <Button title="Follow" outline={true} component={plusIcon} className={styles.button} />
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

          <div className={styles.aboutBox}>
            <div className={styles.title}>Bio</div>
            <div className={styles.description}>The internet's friendliest designer kid.</div>
          </div>

          <div className={styles.socialLinksBox}>
            <div className={styles.title}>Links</div>
            <div className={styles.socialLinks}>
              {SOCIAL_LINKS.map((data, index) => (
                <a href={data.url} key={index} target="_blank" rel="noreferrer noopener">
                  <img src={data.image} className={styles.socialLink} alt={data.title + ' icon'} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UserInformation;
