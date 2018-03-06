import React from 'react';
import styles from './styles.less';

class Jobs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3 className={styles.header}>Job Vacancies</h3>
        <div className={styles.jobs}>
          <div>
            {this.props.jobs.map((item, i) => {
              const { job_description } = item.meta.block_about_job;

              return (
                <div key={i} className={styles.container}>
                  <div className={styles.item}>
                    <img
                      src="https://cdn.checkd.media/favicons/cm.png"
                      alt="Checkd Media"
                    />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.title}>{item.title}</div>
                    <div className={styles.date}>01/01/2018</div>
                    <div className={styles.description}>{job_description}</div>
                  </div>
                  <div className={styles.item}>
                    <a className={styles.cta} href={`/join-us/${item.slug}`}>
                      View Details
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Jobs;
