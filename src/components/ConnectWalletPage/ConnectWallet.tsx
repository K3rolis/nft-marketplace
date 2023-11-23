import React from 'react';
import styles from './ConnectWallet.module.scss';
import HeadLine from '../Utils/Headline/HeadLine';

import imagePlaceholder from '../../assets/utils/CreateAccountImage.png';

import coinbaseIcon from '../../assets/icons/Coinbase.png';
import metaMaskIcon from '../../assets/icons/Metamask.png';
import walletConnectIcon from '../../assets/icons/WalletConnect.png';

const ConnectWallet = () => {
  return (
    <div className={styles.connectWallet}>
      <img src={imagePlaceholder} alt="Connect wallet" className={styles.primaryImage} />
      <div className={styles.connectWalletWrapper}>
        <HeadLine title={'Connect wallet'} subtitle={'Choose a wallet you want to connect. There are several wallet providers.'} className={styles.headline} />

        <div className={styles.buttons}>
          <a href="https://metamask.io/" target="_blank" rel="noreferrer noopener">
            <div className={styles.button}>
              <img src={metaMaskIcon} alt="Metamask" />
              <span className={styles.title}>Metamask</span>
            </div>
          </a>

          <a href="https://walletconnect.com/" target="_blank" rel="noreferrer noopener">
            <div className={styles.button}>
              <img src={walletConnectIcon} alt="Wallet Connect" />
              <span className={styles.title}>Wallet Connect</span>
            </div>
          </a>

          <a href="https://www.coinbase.com/" target="_blank" rel="noreferrer noopener">
            <div className={styles.button}>
              <img src={coinbaseIcon} alt="Coinbase" />
              <span className={styles.title}>Coinbase</span>
            </div>
          </a>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ConnectWallet;
