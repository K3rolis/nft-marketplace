import React from 'react';
import styles from './UserRankingCard.module.scss';

type Props = {
  icon: string;
  user: string;
  change: string;
  nftsSold: number;
  volume: string;
  index: number;
};

const UserRankingCard = ({ icon, user, change, nftsSold, volume, index }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.artistRank}>
        <div className={styles.index}>{index}</div>
        <div className={styles.artist}>
          <img src={icon} alt={`${user} icon`} className={styles.icon} />
          <div className={styles.user}>{user}</div>
        </div>
      </div>
      <div className={styles.artistStats}>
        <div className={`${styles.change} ${change.includes('+') ? styles.positive : styles.negative}`}> {change}</div>
        <div className={styles.sold}>{nftsSold}</div>

        <div className={styles.volume}>{volume}</div>
      </div>
    </div>
  );
};

export default UserRankingCard;
