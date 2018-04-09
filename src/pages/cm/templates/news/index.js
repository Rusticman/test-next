import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import idx from 'idx';

import Page from '../../layout/Page';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Pagination from '../../layout/Pagination';

import Hero from './Hero';
import Posts from './Posts';

class News extends React.Component {

  static limit = 7;

  static async getInitialProps({ req, query }) {
    const page = req.query.page || 1;
    const limit = query.meta.articleLimit;
    const where = {
      type: 'post',
      status: 'publish',
    };
    const posts = await Content.find({
      where,
      sort: 'created_at DESC',
      limit,
      skip: (page - 1) * limit,
    });
    const total = await Content.count(where);

    return {
      page,
      posts,
      total,
      limit,
    };
  }

  render() {
    const { title, description, posts, page, total, limit } = this.props;

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
        <Pagination
          page={page}
          total={total}
          limit={limit}
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
  };
}

export default Page(
  connect(mapStateToProps)(News)
);
