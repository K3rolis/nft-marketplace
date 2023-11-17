import React from 'react';
import styles from './CategoryCard.module.scss';

type Props = {
  title: string;
  primaryImage: string;
  icon: string;
};

const CategoryCard = ({ title, primaryImage, icon }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageBox}>
        <img src={primaryImage} alt={title} className={styles.primaryImage} />
        <img src={icon} alt={`${title} icon`} className={styles.icon} />
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default CategoryCard;
