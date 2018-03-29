import React from 'react';
import { connect } from 'react-redux';
import idx from 'idx';
import Container from '../../../layout/Container';
import styles from './styles.less';

function Skills({ skills }) {
  return (
    <React.Fragment>
      <div className={styles.backgroundSlant} />
      <Container>
        <div className={styles.skills}>
          <h3>Skills</h3>
          <div>{skills}</div>
        </div>
      </Container>
    </React.Fragment>
  );
}

function mapStateToProps({ query }) {
  return {
    skills: idx(query, q => q.meta.skills) || '',
  };
}

export default connect(mapStateToProps)(Skills);
