import React from 'react';
import idx from 'idx';
import Head from 'next/head';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

import Hero from '../../layout/Hero';
import About from './About';
import Page from '../../layout/Page';

class JobPosition extends React.PureComponent {
  render() {
    const { meta: { description, title }, meta } = this.props.jobposition;
    const headline = idx(meta, m => m.block_hero.job_position);
    const about = idx(meta, m => m.block_about_job);
    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
          <meta name={'description'} content={description} />
        </Head>
        <Header transparent offsetTop={10} />
        <Hero
          image="https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?auto=format&fit=crop&w=1350&q=80"
          headline={headline}
        />

        <Footer />
      </React.Fragment>
    );
  }
}

export default Page(JobPosition);
