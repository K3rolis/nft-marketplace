import React from 'react';
import styles from './CreateAccountForm.module.scss';

import imagePlaceholder from '../../../../assets/utils/CreateAccountImage.png';
import HeadLine from '../../Headline/HeadLine';

import icon1 from '../../../../assets/formInputIcons/user.svg';
import icon2 from '../../../../assets/formInputIcons/envelopeSimple.svg';
import icon3 from '../../../../assets/formInputIcons/lockKey.svg';

const CreateAccountForm = () => {
  return (
    <div className={styles.signUp}>
      <img src={imagePlaceholder} alt="Create account" className={styles.primaryImage} />
      <div className={styles.signUpWrapper}>
        <HeadLine title={'Create account'} subtitle={'Welcome! enter your details and start creating, collecting and selling NFTs.'} className={styles.headline} />

        <form className={styles.form}>
          <div className={styles.inputsWrapper}>
            <div className={styles.inputBox}>
              <img src={icon1} alt="user" />
              <input type="text" placeholder="Username" />
            </div>

            <div className={styles.inputBox}>
              <img src={icon2} alt="envelopeSimple" />
              <input type="text" placeholder="Email Address" />
            </div>

            <div className={styles.inputBox}>
              <img src={icon3} alt="lockKey" />
              <input type="text" placeholder="Password" />
            </div>

            <div className={styles.inputBox}>
              <img src={icon3} alt="lockKey" />
              <input type="text" placeholder="Confirm Password" />
            </div>
          </div>

          <button className={styles.button} type="submit">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountForm;
