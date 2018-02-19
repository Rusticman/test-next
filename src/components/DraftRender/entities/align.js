import React from 'react';
import styles from './../styles.less';

export default function alignToHtml(entity, originalText) {
  return <p className={styles[entity.data.alignment]}>{originalText}</p>;
}
