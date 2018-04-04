import React from 'react';
import cx from 'classnames';
import styles from './styles.less';
import convertToHtml from './convert';

export default function DraftRender({ draftContext }) {
  const context =
    typeof draftContext === 'string' ? JSON.parse(draftContext) : draftContext;
  const html = convertToHtml(context);

  return <article className={cx(styles.post, 'news-article')} dangerouslySetInnerHTML={html} />;
}
