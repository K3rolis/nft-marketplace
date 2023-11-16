/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styles from './Button.module.scss';

type Props = {
  title: string;
  component?: React.ElementType;
  outline?: boolean;
  className?: string;
};

const Button = (props: Props) => {
  return (
    <div className={`${styles.buttonBox} ${props.outline ? styles.buttonOutline : ''} ${props.className ? props.className : ''}`}>
      {props.component ? <props.component src={props.component} className={`${styles.buttonIcon} ${props.outline && styles.outlined}`} /> : ''}
      <span className={styles.buttonTitle}>{props.title}</span>
    </div>
  );
};

export default Button;
