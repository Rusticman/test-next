import React from 'react';
import { mediaUrl } from '../../../../../helpers';
import styles from './styles.less';

function Job({ job }) {
  return (
    <a href={`/news/${job.slug}`}>
      <div
        className={styles.job}
      >
        <div className={styles.image}>
          <img src={mediaUrl(job.meta.featured_image)} />
        </div>
        <div className={styles.content}>
          <h2>{job.title}</h2>
          <h3>{`${job.meta.job_description.substring(0, 50)}...`}</h3>
          <br />
        </div>
      </div>
    </a>
  );
}

export default Job;
