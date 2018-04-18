import React from 'react';
import cx from 'classnames';
import Styles from './../styles.less';

export default function alignToHtml(entity, originalText) {
  return <h2 className={cx(Styles[entity.data.alignment] || Styles.left, Styles.heading)}>{originalText}</h2>;
}
