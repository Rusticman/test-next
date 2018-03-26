import React from 'react';
import Styles from './../styles.less';

export default function alignToHtml(entity, originalText) {
  return <h2 className={Styles[entity.data.alignment] || Styles.left}>{originalText}</h2>;
}
