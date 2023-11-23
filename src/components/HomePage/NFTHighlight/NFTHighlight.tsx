import React, { useEffect, useState } from 'react';
import styles from './NFTHighlight.module.scss';
import Container from '../../../common/Container/Container';
import NFTHighlightImage from '../../../assets/utils/NFTHighlight.png';

import userIcon from '../../../assets/userIcons/user-icon-10.png';
import Button from '../../../common/Button/Button';

import { ReactComponent as buttonIcon } from '../../../assets/buttonIcons/Eye.svg';
import { Link } from 'react-router-dom';
import { routes } from '../../../router/routes';

const NFTHighlight = () => {
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
    <div className={styles.backgroundImage} style={{ backgroundImage: `url("${NFTHighlightImage}")` }}>
      <div className={styles.highlight}>
        <Container>
          <div className={styles.content}>
            <div className={styles.userBox}>
              <div className={styles.user}>
                <img src={userIcon} alt="" className={styles.icon} />
                <div className={styles.userName}>Shroomie</div>
              </div>
            </div>

            <div className={styles.title}>Magic Mushrooms</div>

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
            </div>
            <Link to={routes.nftpage}>
              <Button title={'See NFT'} outline={true} component={buttonIcon} className={styles.button} />
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NFTHighlight;
