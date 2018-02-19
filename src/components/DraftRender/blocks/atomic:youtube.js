import React from 'react';
import styles from './styles.less';

function embed(id) {
  return `<iframe title="Youtube Video" style="max-width: 100%;" width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>`;
}

export default function ({ data: { youtube }, data }) {
  return (
    <figure>
      <div
        className={styles[data.alignment]}
        dangerouslySetInnerHTML={{ __html: embed(youtube.id) }}
      />
    </figure>
  );
}
