import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../../layout/Card';

import styles from './styles.less';

function Job({ job }) {
  return (
    <Card href={`/news/${job.slug}`} padding={false}>
      <div
        className={styles.job}
      >
        <div className={styles.content}>
          <div className={styles.pill}>News</div>
          <h2>{job.title}</h2>
          <h3>{`${job.meta.job_description.substring(0, 100)}...`}</h3>
          <br />
        </div>
        <div className={styles.cta}>
          <span className={styles.readMore}>Read More</span>
        </div>
      </div>
    </Card>
  );
}

Job.propTypes = {
  job: PropTypes.object.isRequired,
};


export default Job;
