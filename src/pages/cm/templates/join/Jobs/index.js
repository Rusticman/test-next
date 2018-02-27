import React from 'react';
import styles from './styles.less';

class Jobs extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h3 className={styles.header}>Job Vacancies</h3>
        {this.props.jobs.map((item, i) => {
          const metaData = item.meta;
          const { job_description } = metaData.block_about_job;

          return (
                <div class="container">{job_description}</div>
          );
        })
        }
      </div>
    );
  }
}

export default Jobs;
