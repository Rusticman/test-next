import React from 'react';
import Head from 'next/head';
import Hero from './Hero';
import Header from '../../layout/Header';
import Page from '../../layout/Page';
import idx from 'idx';

class Category extends React.PureComponent {
  render() {
    const { title, meta } = this.props.category;
    console.log(meta);
    const headline = idx(meta, m => m.block_hero.headline);
    const image = idx(meta, m => m.image);

    console.log(image);

    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
        </Head>
        <Header transparent offsetTop={10} />
        <Hero
          scrollTo={10}
          h1={title}
          h2={headline}
          image={image}
        />
      </React.Fragment>
    );
  }
}

export default Page(Category);
