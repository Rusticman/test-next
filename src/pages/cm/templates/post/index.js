import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import idx from 'idx';

import Page from '../../layout/Page';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

import FeaturedImage from './FeaturedImage';
import Meta from './Meta';
import Content from './Content';
import Related from './Related';

import styles from './styles.less';

class Post extends React.Component {

  static async getInitialProps() {
    return {
      related: [],
    }
  };

  render() {
    const { title, description } = this.props;

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
        <FeaturedImage />
        <div className={styles.content}>
          <Meta />
          <Content />
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


// import React from 'react';
// import Page from '../../layout/Page';
// import idx from 'idx';
// import Head from 'next/head';
// import Header from '../../layout/Header';
// import Footer from '../../layout/Footer';
// import Hero from '../../layout/Hero';
// import DraftRender from '../../../../components/DraftRender';
// import { mediaUrl } from '../../../../helpers';
// import styles from './styles.less';
//
// function Post({ post }) {
//   const { meta: { title, description } } = post;
//   const featureImg = idx(post, p => p.meta.featured_image);
//   return (
//     <React.Fragment>
//       <Head>
//         <title>{title}</title>
//         <meta name={'description'} content={description} />
//       </Head>
//       <Header />
//       <div className={styles.container}>
//         <Hero
//           headline={(post && post.title) || ''}
//           image={featureImg ? mediaUrl(featureImg, 'xl') : ''}
//         />
//         <div className={styles.post}>
//           {idx(post, p => p.meta.editor_content_state) ? (
//             <DraftRender draftContext={post.meta.editor_content_state} />
//           ) : (
//             <div>Currently, there is no content to render for this post.</div>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </React.Fragment>
//   );
// }
//
// export default Page(Post);
