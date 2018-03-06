import React from 'react';
import Page from '../../layout/Page';
import idx from 'idx';
import Head from 'next/head';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Hero from '../../layout/Hero';
import DraftRender from '../../../../components/DraftRender';
import { mediaUrl } from '../../../../helpers';
import styles from './styles.less';

function Post({ post }) {
  const { meta: { title, description } } = post;
  const featureImg = idx(post, p => p.meta.featured_image);
  console.log('POST', post.meta);
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name={'description'} content={description} />
      </Head>
      <Header />
      <div className={styles.container}>
        <Hero
          headline={(post && post.title) || ''}
          image={featureImg ? mediaUrl(featureImg, 'xl') : ''}
        />
        <div className={styles.post}>
          {idx(post, p => p.meta.editor_content_state) ? (
            <DraftRender draftContext={post.meta.editor_content_state} />
          ) : (
            <div>Currently, there is no content to render for this post.</div>
          )}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Page(Post);
