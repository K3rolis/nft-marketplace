import React from 'react';
import styles from './NFTCard.module.scss';

export type NFTCardProps = {
  nftImage: string;
  nftTitle: string;
  userIcon: string;
  userName: string;
  price: string;
  highestBid: string;
};

const NFTCard = ({ nftImage, nftTitle, userIcon, userName, price, highestBid }: NFTCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageBox}>
        <img src={nftImage} alt={nftTitle} className={styles.cardImage} />
      </div>
      <div className={styles.content}>
        <div className={styles.artistBox}>
          <span className={styles.title}>{nftTitle}</span>
          <div className={styles.artistData}>
            <img src={userIcon} alt="user icon" className={styles.icon} />
            <span className={styles.name}>{userName}</span>
          </div>
        </div>

        <div className={styles.additionalInfo}>
          <div className={styles.priceBox}>
            <div className={styles.title}>Price</div>
            <div className={styles.value}>{price}</div>
          </div>

          <div className={styles.priceBox}>
            <div className={styles.title}>Highest Bid</div>
            <div className={styles.value}>{highestBid}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
