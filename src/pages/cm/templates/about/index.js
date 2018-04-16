import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import idx from 'idx';

import Page from '../../layout/Page';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import EditorContent from '../../../../components/EditorContent';
import Hero from './Hero';
import Staff from './Staff';

class About extends React.Component {
  static async getInitialProps() {
    return {
      profiles: await Content.find({ parent: 792 }),
    };
  }

  render() {
    const { profiles, description, title } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
          <meta
            name="description"
            content={description}
          />
        </Head>
        <Header />
        <Hero />
        <EditorContent />
        <Staff profiles={profiles} />
        <Footer />
      </React.Fragment>
    );
  }
}

function mapStateToProps({ query }) {
  return {
    title: idx(query, q => q.meta.title) || '',
    description: idx(query, q => q.meta.description) || '',
  };
}

export default Page(
  connect(mapStateToProps)(About)
);
