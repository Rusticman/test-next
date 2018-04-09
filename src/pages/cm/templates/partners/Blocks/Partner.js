import React from 'react';
import { mediaUrl } from '../../../../../helpers';
import Card from '../../../layout/Card';
import styles from './styles.less';

function Partner({ partner }) {
  const { excerpt, name, featured_image } = partner.meta;
  return (
    <Card
      href={`/partners/${partner.slug}`}
    >
      <div className={styles.partner}>
        <div className={styles.imageWrap}>
        <img src={mediaUrl(featured_image, 'lg')} alt={`${name} - Checkd Media Partner`}/>
        </div>
        <h2>{name}</h2>
        <p>
          {`${excerpt && excerpt.substring(0, 50)}...`}
        </p>
      </div>
    </Card>
  );
}

export default Partner;
