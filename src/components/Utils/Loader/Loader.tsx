import React from 'react';
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderIcon}></div>
    </div>
  );
};

export default Loader;
