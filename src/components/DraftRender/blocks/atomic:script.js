import React from 'react';
import styles from './styles.less';

export default function({ data: { script }, data }) {
  return (
    <figure>
      <div
        className={styles[data.alignment]}
        dangerouslySetInnerHTML={{ __html: script }}
      />
    </figure>
  );
}
