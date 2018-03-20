import React from 'react';

import Container from '../../../layout/Container';
import Button from '../../../layout/Button';

import Post from './Post';
import styles from './styles.less';

function Posts({ posts }) {
  const featured = posts[0];

  return (
    <Container>
      <div>
        <Post
          featured
          post={featured}
        />
      </div>
      <div className={styles.divider} />
      <div className={styles.grid}>
        {posts.slice(1).map((p) => <Post post={p} />)}
      </div>
    </Container>
  );
}

export default Posts;



// import React, { Component } from 'react';
// import idx from 'idx';
//
// import { mediaUrl } from '../../../../../helpers';
// import Block from '../../../layout/Block';
// import styles from '../styles.less';
//
// function Posts({ posts }) {
//   if (!posts.length) return null;
//   return (
//     <div className={styles.posts}>
//       {posts.map((post, i) => {
//         const featureImg = idx(post, p => p.meta.featured_image)
//           ? mediaUrl(post.meta.featured_image, 'lg')
//           : 'https://images.unsplash.com/photo-1505473478993-e61136811cc4?auto=format&fit=crop&w=1350&q=80';
//         return (
//           <React.Fragment key={`post-${i}`}>
//             <div>
//               <Block
//                 img={featureImg}
//                 title={post.title || 'This post has no title'}
//                 description=""
//                 to={`/news/${post.slug || ''}`}
//               />
//             </div>
//           </React.Fragment>
//         );
//       })}
//     </div>
//   );
// }
//
// export default Posts;
