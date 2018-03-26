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
  static async getInitialProps({ req }) {

    const lee = await Content.find({ where: { slug: 'lee-struggles' } });
    const jamie = await Content.find({ where: { slug: 'jamie-knowlson' } });
    return {
      lee: lee[0],
      jamie: jamie[0],
    };
  }

  render() {
    const { lee, jamie } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>{this.props.title}</title>
          <meta
            name="description"
            content={this.props.description}
          />
        </Head>
        <Header />
        <Hero />
        <EditorContent />
        <Staff lee={lee} jamie={jamie} />
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
