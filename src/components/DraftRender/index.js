import React from 'react';

import styles from './styles.less';
import convertToHtml from './convert';

export default function DraftRender({ draftContext }) {
  const context =
    typeof draftContext === 'string' ? JSON.parse(draftContext) : draftContext;
  const html = convertToHtml(context);

  return <article className={styles.post} dangerouslySetInnerHTML={html} />;
}
