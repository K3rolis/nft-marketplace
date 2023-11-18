import React from 'react';
import styles from './HeadLine.module.scss';

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
