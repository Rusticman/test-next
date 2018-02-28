import React from 'react';
import idx from 'idx';

import Page from '../../layout/Page';
import Hero from '../../layout/Hero';
import Header from '../../layout/Header';
import Jobs from './Jobs';

class Join extends React.Component {
  static async getInitialProps({ query }) {
    return {
      jobs: await Content.find({ parent: query.id }),
    };
  }

  render() {
    const { block_hero } = this.props.join.meta;

    const headline = idx(block_hero, bh => bh.headline);
    const secondary = idx(block_hero, bh => bh.secondary);

    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default Page(Join);
