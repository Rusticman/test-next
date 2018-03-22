import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import idx from 'idx';

import Page from '../../layout/Page';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

import Hero from './Hero';
import Blocks from './Blocks';

class Partners extends React.Component {

  static async getInitialProps({ query }) {
    return {
      partners: await Content.find({ parent: query.id }),
    };
  }

  render() {
    const { title, description, partners } = this.props;

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
        <Blocks partners={partners} />
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
  connect(mapStateToProps)(Partners)
);




//
//
// import React from 'react';
// import Head from 'next/head';
// import Header from '../../layout/Header';
// import Footer from '../../layout/Footer';
// import Page from '../../layout/Page';
// import Hero from '../../layout/Hero';
// import Blocks from './Blocks';
//
// class Partners extends React.Component {
//   static async getInitialProps({ query }) {
//     return {
//       subpartners: await Content.find({ parent: query.id }),
//     };
//   }
//
//   render() {
//     const { partners: { meta: { block_hero: { headline }, title, description } }, partners, subpartners } = this.props;
//     return (
//       <React.Fragment>
//         <Head>
//           <title>{title}</title>
//           <meta name={'description'} content={description} />
//         </Head>
//         <Header transparent offsetTop={10} />
//         <Hero
//           headline={headline}
//           image="//cdn.checkd.media/images/bq5a0ki6-lg.jpg"
//         />
//         <Blocks partners={subpartners} />
//         <Footer />
//       </React.Fragment>
//     );
//   }
// }
//
// export default Page(Partners);
