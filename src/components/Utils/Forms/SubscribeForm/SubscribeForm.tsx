import React, { useState } from 'react';
import styles from './SubscribeForm.module.scss';
import icon from '../../../../assets/buttonIcons/letter.svg';

const SubscribeForm = () => {
  const [email, setEmail] = useState<string>('');

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    alert('Successfully Subscribed ' + email);
    setEmail('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="email" className={styles.input} value={email} placeholder="Enter Your Email Address" id="email" onChange={(e) => setEmail(e.target.value)} required />
      <button>
        <img src={icon} alt="letter icon" /> <span>Subscribe</span>
      </button>
    </form>
  );
};

export default SubscribeForm;
