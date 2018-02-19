import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Logo from './Logo';
import Menu from './Menu';

import styles from './styles.less';

class Header extends React.Component {
  /**
   * @param props
   */
  constructor(props) {
    super(props);
    this.transitioning = false;
    this.state = {
      transparent: props.transparent,
    };
  }

  /**
   * Subscribe to window scroll updates if the header is transparent
   * and it should change after a scroll period
   */
  componentDidMount() {
    if (this.props.transparent && this.props.offsetTop > -1) {
      this.handleScroll();
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  /**
   * Unsubscribe from scroll events
   */
  componentWillUnmount() {
    if (this.props.transparent && this.props.offsetTop > -1) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  /**
   * Change the state of transparency based on the scroll position
   */
  handleScroll = () => {
    const { offsetTop } = this.props;
    const fromTop = window.scrollY;

    const transparent = !(fromTop > offsetTop);

    // Avoid duplicate setStates
    if (!this.transitioning && this.state.transparent !== transparent) {
      this.transitioning = true;
      this.setState({
        transparent,
      }, () => {
        this.transitioning = false;
      });
    }
  };

  render() {
    const { transparent } = this.state;

    return (
      <div
        className={cx(styles.container, {
          [styles.transparent]: transparent,
        })}
      >
        <div />
        <Logo />
        <Menu transparent={this.state.transparent} />
        <div />
      </div>
    );
  }
}

Header.propTypes = {
  transparent: PropTypes.bool,
  offsetTop: PropTypes.number,
};

Header.defaultProps = {
  transparent: false,
  offsetTop: -1,
};

export default Header;
