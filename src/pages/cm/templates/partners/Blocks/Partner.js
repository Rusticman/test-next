import React from 'react';

import Card from '../../../layout/Card';
import styles from './styles.less';

function Partner({ partner }) {
  const { excerpt, name, featured_image } = partner.meta;
  return (
    <Card
      href={`/partners/${partner.slug}`}
    >
      <div className={styles.partner}>
        <img src={`http://cdn.checkd.media/images/${featured_image}-lg.jpg`} alt={`${name} - Checkd Media Partner`}/>
        <h2>{name}</h2>
        <p>
          {`${excerpt.substring(0, 50)}...`}
        </p>
      </div>
    </Card>
  );
}

export default Partner;
