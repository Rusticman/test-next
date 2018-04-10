import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import idx from 'idx';
import Hero from './Hero';
import Contact from './Contact';
import Jobs from './Jobs';
import Page from '../../layout/Page';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

class JoinUs extends React.Component {

  static async getInitialProps() {
    const jobs = await Content.find({ where:{ parent: 791, status: 'publish' }});

    return { jobs };
  }

  render() {
    const { title, description, jobs } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
          <meta
            name="description"
            content={description}
          />
          <script
            src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
        </Head>
        <Header />
        <Hero jobs={jobs} />
        <Jobs jobs={jobs} />
        <Contact />
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
  connect(mapStateToProps)(JoinUs)
);
