import React from 'react';
import styles from './Headline.module.scss';

type Props = {
  title: string;
  subtitle?: string;
  className?: string;
};

const HeadLine = ({ title, subtitle, className }: Props) => {
  return (
    <div className={`${styles.headline} ${className ? className : ''}`}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  );
};

export default HeadLine;
