import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles.less';

function Button({ href, children, style }) {
  return (
    <a className={cx(styles.button, style)} href={href}>
      {children}
    </a>
  );
}

Button.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
