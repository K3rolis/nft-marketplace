import React, { useState } from 'react';
import styles from './CreateAccountForm.module.scss';

import imagePlaceholder from '../../../../assets/utils/CreateAccountImage.png';
import HeadLine from '../../Headline/HeadLine';

import icon1 from '../../../../assets/formInputIcons/user.svg';
import icon2 from '../../../../assets/formInputIcons/envelopeSimple.svg';
import icon3 from '../../../../assets/formInputIcons/lockKey.svg';

const CreateAccountForm = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  console.log(inputs);

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (inputs.username.length > 0 && inputs.email.length > 0 && inputs.password.length > 0 && inputs.confirmPassword.length > 0) {
      if (inputs.confirmPassword === inputs.password) {
        setInputs({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
        alert(`Welcome ${inputs.username} `);
      } else {
        alert('check inputs');
      }
    } else {
      alert('check inputs');
    }
  };

  return (
    <div className={styles.signUp}>
      <img src={imagePlaceholder} alt="Create account" className={styles.primaryImage} />
      <div className={styles.signUpWrapper}>
        <HeadLine title={'Create account'} subtitle={'Welcome! enter your details and start creating, collecting and selling NFTs.'} className={styles.headline} />

        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.inputsWrapper}>
            <div className={styles.inputBox}>
              <img src={icon1} alt="user" />
              <input type="text" placeholder="Username" value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
            </div>

            <div className={styles.inputBox}>
              <img src={icon2} alt="envelopeSimple" />
              <input type="email" placeholder="Email Address" value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />
            </div>

            <div className={styles.inputBox}>
              <img src={icon3} alt="lockKey" />
              <input type="password" placeholder="Password" value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
            </div>

            <div className={styles.inputBox}>
              <img src={icon3} alt="lockKey" />
              <input type="password" placeholder="Confirm Password" value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
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
