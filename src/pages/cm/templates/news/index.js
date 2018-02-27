import React, { Component } from 'react';
import Page from '../../layout/Page';
import Header from '../../layout/Header';
import Hero from '../../layout/Hero';
import Posts from './Posts';
import idx from 'idx';

class News extends Component {

  static async getInitialProps({ query: news }) {
    const posts = await Content.find({
      where: {
        parent: news.id,
        status: 'publish',
      },
      sort: 'created_at DESC',
      limit: 6,
    });

    return { posts, news };
  }

  render() {
    const { posts, news } = this.props;

    const headline = idx(this.props.news.meta.block_hero.headline, headline => headline);
    const secondary = idx(this.props.news.meta.block_hero.secondary, secondary => secondary);
    return (
      <React.Fragment>
        <Header
          transparent
          offsetTop={10}
        />
        <Hero
          image="https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?auto=format&fit=crop&w=1350&q=80"
          headline={headline || 'no headline'}
          description={secondary || 'no description'}
        />
        <Posts posts={this.props.posts} />
      </React.Fragment>
    );
  }
}

export default Page(News);
