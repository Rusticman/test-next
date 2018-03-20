import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import idx from 'idx';

import Page from '../../layout/Page';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

import Hero from './Hero';
import Posts from './Posts';

class News extends React.Component {

  static async getInitialProps() {
    const posts = await Content.find({
      where: {
        type: 'post',
        status: 'publish',
      },
      sort: 'created_at DESC',
      limit: 6,
    });

    return { posts };
  }

  render() {
    const { title, description, posts } = this.props;

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
        <Posts posts={posts} />
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
  connect(mapStateToProps)(News)
);
