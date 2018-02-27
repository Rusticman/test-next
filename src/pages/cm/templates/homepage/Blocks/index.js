import React from 'react';
import LazyLoad from 'react-lazyload';

import Block from '../../../layout/Block';
import styles from './styles.less';

function Blocks() {
  return (
    <div className={styles.blocks}>
      <div className={styles.background} />
      <div className={styles.container}>
        <LazyLoad>
          <Block
            img={'https://images.unsplash.com/photo-1505473478993-e61136811cc4?auto=format&fit=crop&w=1350&q=80'}
            title={'News'}
            description={'Catch up on what is happening at Checkd.Media'}
            to={'/news'}
          />
        </LazyLoad>
        <LazyLoad>
          <Block
            img={'https://images.unsplash.com/photo-1493689485253-f07fcbfc731b?auto=format&fit=crop&w=1333&q=80'}
            title={'Partners'}
            description={'Discover who we work we with'}
            to={'/partners'}
          />
        </LazyLoad>
        <LazyLoad>
          <Block
            img={'https://images.unsplash.com/photo-1501228286853-24fd91e2c0c4?auto=format&fit=crop&w=1350&q=80'}
            title={'What We Do'}
            description={'Discover more about what we offer'}
            to={'/what-we-do'}
          />
        </LazyLoad>
        <LazyLoad>
          <Block
            img={'https://images.unsplash.com/photo-1494707924465-e1426acb48cb?auto=format&fit=crop&w=1350&q=80'}
            title={'Join Us'}
            description={'Be apart of our ever expenanding team'}
            to={'/join-us'}
          />
        </LazyLoad>
      </div>
    </div>
  );
}

export default Blocks;
