import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles.less';

function Heading({ children, h1, alignment }) {
  return (
    <div className={cx(styles.container, styles[alignment])}>
      {h1 ?
        <h1  className={styles.heading}>
          {children}
        </h1> :
        <h2  className={styles.heading}>
          {children}
        </h2>}
    </div>
  );
}


Heading.PropTypes = {
  h1: PropTypes.bool,
  alignment: PropTypes.string,
};

Heading.defaultProps = {
  h1: true,
  alignment: 'center',
};

export default Heading;
