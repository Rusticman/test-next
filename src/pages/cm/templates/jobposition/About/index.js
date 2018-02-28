import React from 'react';

import Container from '../../../layout/Container';
import Button from '../../../layout/Button';

import styles from './styles.less';

class About extends React.Component {
  render() {
    console.log(this.props);
    const { skills, benefits, main_duties, job_description } = this.props.about;
    return (
      <Container>
        <div className={styles.about}>
          <h2>Skills</h2>
          <p>{skills}</p>
          <h2>Benefits</h2>
          <p>{benefits}</p>
          <h2>Main Duties</h2>
          <p>{main_duties}</p>
          <h2>Job Description</h2>
          <p>{job_description}</p>
          <Button href="/about">Apply</Button>
        </div>
      </Container>
    );
  }
}

export default About;
