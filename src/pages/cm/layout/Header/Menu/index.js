import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'next/link';

import Bars from '../../../../../components/Icon/bars';

import styles from './styles.less';

class Menu extends React.Component {
  static propTypes = {
    transparent: PropTypes.bool,
  };

  static defaultProps = {
    transparent: false,
  };

  constructor() {
    super();
    this.state = {
      isOpen: false,
      path: '/',
    };
  }

  componentDidMount() {
    this.setState({
      path: window.location.pathname,
    });
  }

  _isActive = base => {
    const path = this.state.path.split('/').filter(Boolean)[0];
    return base === path;
  };

  _handleBodyOverrides(open) {
    document.body.style.overflow = open ? 'hidden' : 'auto';
    const { classList } = document.body;
    if (open) classList.add('menu-open');
    if (!open) classList.remove('menu-open');
  }

  _toggleVisibility = () => {
    const isOpen = !this.state.isOpen;
    this.setState({ isOpen });
    this._handleBodyOverrides(isOpen);
  };

  /**
   *
   */
  renderDesktop() {
    return (
      <ul>
        <li className={cx({ active: this._isActive('news') })}>
          <Link href="/news">
            <a href="/news">News</a>
          </Link>
        </li>
        <li className={cx({ active: this._isActive('about') })}>
          <Link href="/about">
            <a href="/about">About</a>
          </Link>
        </li>
        <li className={cx({ active: this._isActive('partners') })}>
          <Link href="/partners">
            <a href="/partners">Partners</a>
          </Link>
        </li>
        <li className={cx({ active: this._isActive('what-we-do') })}>
          <Link href="/what-we-do">
            <a href="/what-we-do">What We Do</a>
          </Link>
        </li>
        <li className={cx({ active: this._isActive('join-us') })}>
          <Link href="/join-us">
            <a href="/join-us">Join Us</a>
          </Link>
        </li>
      </ul>
    );
  }

  renderMobile() {
    const { isOpen } = this.state;

    return (
      <React.Fragment>
        <div
          className={styles.icon}
          tabIndex={0}
          role="button"
          aria-label="toggle mobile menu"
          onClick={this._toggleVisibility}
          onKeyUp={this._toggleVisibility}
        >
          <Bars />
        </div>
        <div className={cx(styles.sidemenu, { [styles.hide]: !isOpen })}>
          <ul>
            <li className={cx({ active: this._isActive('news') })}>
              <Link href="/news">
                <a href="/news">News</a>
              </Link>
            </li>
            <li className={cx({ active: this._isActive('about') })}>
              <Link href="/about">
                <a href="/about">About</a>
              </Link>
            </li>
            <li className={cx({ active: this._isActive('partners') })}>
              <Link href="/partners">
                <a href="/partners">Partners</a>
              </Link>
            </li>
            <li className={cx({ active: this._isActive('what-we-do') })}>
              <Link href="/what-we-do">
                <a href="/what-we-do">What We Do</a>
              </Link>
            </li>
            <li className={cx({ active: this._isActive('join-us') })}>
              <Link href="/join-us">
                <a href="/join-us">Join Us</a>
              </Link>
            </li>
          </ul>
          {/*{this.renderMobileBlock(*/}
            {/*'News',*/}
            {/*'/news',*/}
            {/*'//cdn.checkd.media/images/foobar.jpg'*/}
          {/*)}*/}
          {/*{this.renderMobileBlock(*/}
            {/*'About Us',*/}
            {/*'/about',*/}
            {/*'//cdn.checkd.media/images/foobar.jpg'*/}
          {/*)}*/}
          {/*{this.renderMobileBlock(*/}
            {/*'Partners',*/}
            {/*'/',*/}
            {/*'//cdn.checkd.media/images/foobar.jpg'*/}
          {/*)}*/}
          {/*{this.renderMobileBlock(*/}
            {/*'Brands',*/}
            {/*'/',*/}
            {/*'//cdn.checkd.media/images/foobar.jpg'*/}
          {/*)}*/}
          {/*{this.renderMobileBlock(*/}
            {/*'Join Us',*/}
            {/*'/',*/}
            {/*'//cdn.checkd.media/images/foobar.jpg'*/}
          {/*)}*/}
        </div>
      </React.Fragment>
    );
  }

  renderMobileBlock(text, to, image) {
    return (
      <div
        className={styles.block}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="mask" />
        <div className="content">
          <Link href={to}>
            <a href={to}>{text}</a>
          </Link>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className={styles.desktop}>{this.renderDesktop()}</div>
        <div className={styles.mobile}>{this.renderMobile()}</div>
      </div>
    );
  }
}

export default Menu;
