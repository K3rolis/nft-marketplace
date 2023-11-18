import React from 'react';
import styles from './HowItWorks.module.scss';
import Container from '../../../common/Container/Container';
import HowItWorksCard from './HowItWorksCard/HowItWorksCard';

import image1 from '../../../assets/howitworks/howItWorks1.png';
import image2 from '../../../assets/howitworks/howItWorks2.png';
import image3 from '../../../assets/howitworks/howItWorks3.png';
import HeadLine from '../../Utils/Headline/HeadLine';

const HowItWorks = () => {
  const HARDCODED_DATA = [
    {
      image: image1,
      title: 'Setup Your wallet',
      description: 'Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.',
    },
    {
      image: image2,
      title: 'Create Collection',
      description: 'Upload your work and setup your collection. Add a description, social links and floor price.',
    },
    {
      image: image3,
      title: 'Start Earning',
      description: 'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
    },
  ];
  return (
    <Container>
      <HeadLine title='How it works' subtitle='Find out how to get started' />

      <div className={styles.cards}>
        {HARDCODED_DATA.map((data, index) => (
          <HowItWorksCard {...data} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default HowItWorks;
