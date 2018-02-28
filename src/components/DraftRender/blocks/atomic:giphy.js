import React from 'react';
import styles from './styles.less';

function embed(id) {
  return `<iframe title="Giphy Video" style="max-width: 100%;" width="560" height="315" src="https://giphy.com/embed/${id}" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>`;
}

export default function({ data: { giphy }, data }) {
  return (
    <figure>
      <div
        className={styles[data.alignment]}
        dangerouslySetInnerHTML={{ __html: embed(giphy.id) }}
      />
    </figure>
  );
}
