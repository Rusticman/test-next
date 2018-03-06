import React from 'react';
import idx from 'idx';
import Head from 'next/head';
import Page from '../../layout/Page';
import Hero from '../../layout/Hero';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

import Jobs from './Jobs';

class Join extends React.Component {
  static async getInitialProps({ query }) {
    return {
      jobs: await Content.find({ parent: query.id }),
    };
  }

  render() {
    const { meta: { block_hero, title, description } } = this.props.join;
    const headline = idx(block_hero, bh => bh.headline);
    const secondary = idx(block_hero, bh => bh.secondary);
    return (
      <React.Fragment>
        <Head>
          <title>
            {title}
          </title>
          <meta name={'description'} content={description} />
        </Head>
        <Header
          transparent
          offsetTop={10}
        />
        <Hero
          image="https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?auto=format&fit=crop&w=1350&q=80"
          headline={headline}
          description={secondary}
        />
        <Jobs jobs={this.props.jobs} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Page(Join);
