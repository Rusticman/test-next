import React from 'react';
import Styles from './../styles.less';

export default function alignToHtml(entity, originalText) {
  return {
    start: '<li>',
    end: '</li>',
    nestStart: '<ul>',
    nestEnd: '</ul>',
  };
}
