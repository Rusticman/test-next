import React from 'react';
import styles from './styles.less';

function embed(id) {
  return `<div class="playbuzz" data-id="${id}"></div>`;
}

export default function ({ data: { playbuzz }, data }) {
  return (
    <figure>
      <div
        className={styles[data.alignment]}
        dangerouslySetInnerHTML={{ __html: embed(playbuzz.id) }}
      />
    </figure>
  );
}
