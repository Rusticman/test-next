import React from 'react';
import styles from './styles.less';

class News extends React.Component {

  render() {

    return (
      <React.Fragment>
        <div className={styles.news}>
          NEWS
          </div>
        <div className={styles.grid}>
          <div></div>
          <div></div>
        </div>
      </React.Fragment>
    );
  }
}

export default News;
