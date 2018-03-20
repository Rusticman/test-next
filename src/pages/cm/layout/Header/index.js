import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Container from '../Container';

import Logo from './Logo';
import Menu from './Menu';

import styles from './styles.less';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <Container className={styles.container}>
          <div>
            <Logo />
          </div>
          <div className={styles.menu}>
            <Menu />
          </div>
        </Container>
      </header>
    );
  }
}


export default Header;
