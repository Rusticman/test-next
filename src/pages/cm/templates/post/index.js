import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import idx from 'idx';

import Page from '../../layout/Page';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

import FeaturedImage from './FeaturedImage';
import Contents from './Contents';
import Related from './Related';

import styles from './styles.less';

class Post extends React.Component {

  static async getInitialProps() {

    const related = await Content.find({
      where: {
        type: 'post',
        status: 'publish',
      },
      limit: 3,
      sort: 'created_at DESC',
    });

    return {
      related,
    };
  };

  render() {
    const { title, description, related } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
          <meta
            name="description"
            content={description}
          />
        </Head>
        <div className={styles.header}>
          <Header />
        </div>
        <FeaturedImage />
        <div className={styles.content}>
          <Contents />
          <Related related={related} />
        </div>
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
  connect(mapStateToProps)(Post)
);
