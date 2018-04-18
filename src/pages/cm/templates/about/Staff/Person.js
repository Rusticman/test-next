import React from 'react';
import Card from '../../../layout/Card';
import styles from './styles.less';

function Person({ image, name, title, description, slug, index }) {
  return (
    <Card key={'person' + index} href={`/about/${slug}`}>
      <div className={styles.person}>
        <div>
          <img src={image} alt={`${name} - ${title}`} />
        </div>
        <h2>{name}</h2>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Card>
  );
}

export default Person;
