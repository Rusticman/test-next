import React, { Component } from 'react';
import Head from 'next/head';
import Page from '../../layout/Page';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Hero from '../../layout/Hero';
import Posts from './Posts';
import idx from 'idx';

class News extends Component {
  static async getInitialProps({ query: news }) {
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
    const { posts, news } = this.props;
    const { meta:{ title, description} } = news;
    const headline = idx(
      this.props.news,
      headline => headline.meta.block_hero.headline
    );
    const secondary = idx(
      this.props.news,
      secondary => secondary.meta.block_hero.secondary
    );
    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
          <meta name={'description'} content={description} />
        </Head>
        <Header transparent offsetTop={10} />
        <Hero
          image="https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?auto=format&fit=crop&w=1350&q=80"
          headline={headline || 'no headline'}
          description={secondary || 'no description'}
        />
        <Posts posts={this.props.posts} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Page(News);
