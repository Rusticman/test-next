import React from 'react';
import Page from '../../layout/Page';
import idx from 'idx';
import Header from '../../layout/Header';
import Hero from '../../layout/Hero';
import DraftRender from '../../../../components/DraftRender';
import { mediaUrl } from '../../../../helpers';
import styles from './styles.less';

class Post extends React.Component {
  render() {
    const post = this.props.post;
    const featureImg = idx(post, p => p.meta.featured_image);
    return (
      <React.Fragment>
        <Header />
        <div className={styles.container}>
          <Hero
            headline={post && post.title || ''}
            image={featureImg ? mediaUrl(featureImg, 'xl') : ''}
          />
          <div className={styles.post}>
            {idx(post, p => p.meta.editor_content_state) ?
              <DraftRender draftContext={post.meta.editor_content_state} />:
              <div>Currently, there is no content to render for this post.</div>
            }
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Page(Post);
