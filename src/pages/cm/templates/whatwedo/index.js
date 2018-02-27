import React, { Component } from 'react';
import Page from '../../layout/Page';
import idx from 'idx';
import Content from './Content';
import Header from '../../layout/Header';
import Hero from '../../layout/Hero';

class WhatWeDo extends Component {

  render() {
    const { block_hero, block_services } = this.props.meta;

    const headline = idx(block_hero, bh => bh.headline || '');
    const secondary = idx(block_hero, bh => bh.secondary || '');
    const content = idx(block_services, bs => JSON.parse(bs.editor_state));

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
        <Content content={content} />
  </React.Fragment>
    );
  }
}

export default Page(WhatWeDo);
