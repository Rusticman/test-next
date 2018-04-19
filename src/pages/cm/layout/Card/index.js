import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.less';

function Card({ children, href, padding, ...props }) {
  if (href) {
    return (
      <a
        className={cx(styles.card, styles.href, {
          [styles.padding]: padding,
        })}
        {...props}
        href={href}
      >
        {children}
      </a>
    );
  }

  return (
    <div
      className={cx(styles.card, {
        [styles.padding]: padding,
      })}
      {...props}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  padding: PropTypes.bool,
};

Card.defaultProps = {
  href: '',
  padding: true,
};

export default Card;
