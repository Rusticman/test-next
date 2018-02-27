import React from 'react';
import cx from 'classnames';
import styles from './styles.less';

function Button({ href, children, style }) {
  return (
    <a className={cx(styles.button, style)} href={href}>
      {children}
    </a>
  );
}

export default Button;
