import React from 'react';
import styles from './SubscribeWidget.module.scss';
import Container from '../../../common/Container/Container';
import SubscribeForm from '../../Utils/Forms/SubscribeForm/SubscribeForm';

import image from '../../../assets/utils/subscribeWidgetImage.png';
import HeadLine from '../../Utils/Headline/HeadLine';

const SubscribeWidget = () => {
  return (
    <Container>
      <div className={styles.subscriberWidget}>
        <div className={styles.imageBox}>
          <img src={image} alt="Subscribe Widget" />
        </div>

        <div className={styles.content}>
          <HeadLine className={styles.headLine} title="Join Our Weekly Digest" subtitle="Get Exclusive Promotions & Updates Straight To Your Inbox." />
          <SubscribeForm />
        </div>
      </div>
    </Container>
  );
};

export default SubscribeWidget;
