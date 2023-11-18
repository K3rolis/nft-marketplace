import React from 'react';
import styles from './HowItWorksCard.module.scss';

type Props = {
  image: string;
  title: string;
  description: string;
};

const HowItWorksCard = ({ image, title, description }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageBox}>
        <img src={image} alt="" className={styles.cardImage} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export default HowItWorksCard;
