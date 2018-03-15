import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles.less';

function Card({ children, href, ...props }) {
  if (href) {
    return (
      <a
        className={cx(styles.card, styles.href)}
        {...props}
        href={href}
      >
        {children}
      </a>
    );
  }

  return (
    <div
      className={styles.card}
      {...props}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};

Card.defaultProps = {
  href: '',
};

export default Card;
