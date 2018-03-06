import React from 'react';
import cx from 'classnames';
import Page from '../../layout/Page';
import Hero from '../../layout/Hero';
import Footer from '../../layout/Footer';
import Header from '../../layout/Header';
import Map from './Map';
import Office from './Office';
import Person from './Person';
import Head from 'next/head';


import styles from './styles.less';

function About({ about }) {
  const { meta: { block_hero, title, description } } = about;
  const { headline, secondary } = block_hero;
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name={'description'} content={description} />
      </Head>
      <Header
        transparent
        offsetTop={285}
      />
      <Hero
        image={'https://images.unsplash.com/photo-1496902526517-c0f2cb8fdb6a?auto=format&fit=crop&w=1350&q=80'}
        headline={headline}
        description={secondary}
      />
      <div className={cx(styles.container, styles.shadow)}>
        <Office />
        <Map />
      </div>
      <h2
        className={styles.header}
      >FOUNDERS
      </h2>
      <div className={styles.responsive}>
        <div className={cx(styles.people, styles.width)}>
          <Person
            image="https://cdn.checkd.media/images/w9yqp79-xl.jpg"
            to='/about/lee-struggles'
          />
          <Person
            image="https://cdn.checkd.media/images/pjtqp4e-xl.jpg"
            to='/about/jamie-knowlson'
          />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Page(About);
