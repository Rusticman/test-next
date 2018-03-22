import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import idx from 'idx';

import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Page from '../../layout/Page';

class Partners extends React.Component {
  static async getInitialProps({ query }) {
    return {
      subpartners: await Content.find({ parent: query.id }),
    };
  }
  render() {
    const { subpartners, headline, description, title } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
          <meta name={'description'} content={description} />
        </Head>
        <Header transparent offsetTop={10} />
        <Hero
          headline={headline}
          image="//cdn.checkd.media/images/bq5a0ki6-lg.jpg"
        />
        <Footer />
      </React.Fragment>
    );
  }
}

function mapStateToProps({ query }) {
  return {
    title: idx(query, q => q.meta.title) || '',
    description: idx(query, q => q.meta.description) || '',
    headline: idx(query, q => q.meta.headline) || '',
  };
}


export default Page(connect(mapStateToProps)(Partners));
