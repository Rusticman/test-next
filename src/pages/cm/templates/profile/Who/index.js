import React, { Component } from 'react';
import styles from '../styles.less';

class Who extends Component {

  render() {

    const { profile: { meta: { block_details } } } = this.props;
    return (
      <div className={styles.who}>
        <div className={styles['image-wrapper']}>
          <div style={{ backgroundImage: `url(${block_details.image})` }} />
        </div>
        <div className={styles.person}>
          <p> {block_details.name}</p><br />
          <p> {block_details.jobRole}</p><br />
          <p> {block_details.email}</p>
        </div>
      </div>
    )
  }
}

export default Who;
