import React, { useEffect, useState } from 'react';
import styles from './NFTInfo.module.scss';
import Container from '../../../common/Container/Container';

import NFTImage from '../../../assets/utils/NFTPage.jpg';
import Button from '../../../common/Button/Button';

import userIcon from '../../../assets/userIcons/user-icon-6.png';
import globeIcon from '../../../assets/social/globe.svg';
import { routes } from '../../../router/routes';
import { Link } from 'react-router-dom';

const NFTInfo = () => {
  const [initialTime, setInitialTime] = useState<number>(86400);

  const hours = Math.floor(initialTime / 60 / 60);
  const minutes = Math.floor((initialTime / 60) % 60);
  const seconds = Math.floor(initialTime % 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setInitialTime(initialTime - 1);
    }, 1000);

    if (initialTime === 0) {
      setInitialTime(86400);
    }

    return () => {
      clearInterval(timer);
    };
  }, [initialTime]);

  return (
    <div className={styles.nftInfo}>
      <img src={NFTImage} alt="" className={styles.primaryImage} />
      <Container>
        <div className={styles.nftContent}>
          <div className={styles.headline}>
            <div className={styles.title}>The Orbitians</div>
            <div className={styles.subtitle}> Minted on Sep 30, 2022</div>
          </div>

          <div className={styles.auctionBox}>
            <div className={styles.auctionTitle}>Auction ends in:</div>
            <div className={styles.timerBox}>
              <div className={styles.durationBox}>
                <div className={styles.timeValue}> {hours} </div>
                <div className={styles.duration}> Hours </div>
              </div>
              <span className={styles.colon}>:</span>
              <div className={styles.durationBox}>
                <div className={styles.timeValue}> {minutes} </div>
                <div className={styles.duration}> Minutes </div>
              </div>
              <span className={styles.colon}>:</span>
              <div className={styles.durationBox}>
                <div className={styles.timeValue}> {seconds} </div>
                <div className={styles.duration}> Seconds </div>
              </div>
            </div>

            <Button title="Place Bid" />
          </div>

          <div className={styles.author}>
            <div className={styles.title}>Created By </div>
            <div className={styles.user}>
              <img src={userIcon} alt="user icon" className={styles.icon} />
              <div className={styles.username}>Dish Studio</div>
            </div>
          </div>

          <div className={styles.descriptionWrapper}>
            <div className={styles.title}>Description</div>
            <div className={styles.description}>
              The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain, <br />
              <br />
              There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians. <br />
              <br />
              They live in a metal space machines, high up in the sky and only have one foot on Earth. These Orbitians are a peaceful race, but they have been at war with a group of invaders for many
              generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be
              able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.
            </div>
          </div>

          <div className={styles.detailsWrapper}>
            <div className={styles.title}>Details</div>
            <Link to={routes.homepage}>
              <div className={styles.webLinks}>
                <img src={globeIcon} alt="icon" className={styles.icon} />
                <span className={styles.webLink}> View on Etherscan</span>
              </div>
            </Link>

            <Link to={routes.homepage}>
              <div className={styles.webLinks}>
                <img src={globeIcon} alt="icon" className={styles.icon} />
                <span className={styles.webLink}> View Original</span>
              </div>
            </Link>
          </div>

          <div className={styles.tagsWrapper}>
            <div className={styles.title}>Tags</div>
            <div className={styles.tags}>
              <div className={styles.tag}>Animation</div>
              <div className={styles.tag}>illustration</div>
              <div className={styles.tag}>Moon</div>
              <div className={styles.tag}>Moon</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NFTInfo;
