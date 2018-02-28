import React from 'react';
import Head from 'next/head';
import Hero from './Hero';
// import Header from '../../layout/Header';
import Page from '../../layout/Page';

class Category extends React.PureComponent {
  render() {
    const { title, meta } = this.props.category;
    return (
      <React.Fragment>
        {/*<Head>*/}
          {/*<title>{title}</title>*/}
        {/*</Head>*/}
        {/*<Header transparent offsetTop={10} />*/}
        <Hero
          scrollTo={10}
          h1={title}
          h2="Who we work with"
          image="//cdn.checkd.media/images/bq5a0ki6-lg.jpg"
        />
      </React.Fragment>
    );
  }
}

export default Page(Category);
