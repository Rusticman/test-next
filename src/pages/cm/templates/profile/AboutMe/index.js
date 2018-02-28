import React, { Component } from 'react';

import styles from '../styles.less';


class AboutMe extends Component {

  render() {

    const { profile: { meta: { block_future, block_about } } } = this.props;
    return (
      <div className={styles.about}>
        <div className={styles.description}>
          <h2>ABOUT ME</h2>
          <p>
            {block_about}
          </p>
        </div>
        <div className={styles.future}>
          <h2>FUTURE @ CHECKD MEDIA</h2>
          <p>
            {block_future}
          </p>
        </div>
      </div>
    )
  }
}

export default AboutMe;
