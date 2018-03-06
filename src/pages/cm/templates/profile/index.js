import React from 'react';
import Head from 'next/head';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Hero from './Hero';
import Page from '../../layout/Page';
import Who from './Who';
import Questions from './Questions';
import styles from './styles.less';
import AboutMe from './AboutMe';

function Profile({ profile }) {
  return (
    <React.Fragment>
      <Head>
        <title>{profile.title}</title>
      </Head>
      <Header
        transparent
        offsetTop={10}
      />
      <Hero
        headline={'Profile'}
      />
      <div className={styles.container}>
        <Who profile={profile} />
        <AboutMe profile={profile} />
        <Questions profile={profile} />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Page(Profile);
