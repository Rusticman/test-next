import React from 'react';
import { connect } from 'react-redux';

import DraftRender from '../../../../../components/DraftRender';
import Container from '../../../layout/Container';
import Heading from '../../../layout/Heading';
import styles from './styles.less';

function Skills({ draftContext }) {
  return (
    <React.Fragment>
      <div className={styles.backgroundSlant} />
      <Container className={styles.content}>
        <div className={styles.skills}>
          <Heading h1={false}>Essential Skills </Heading>
          <DraftRender draftContext={draftContext} />
        </div>
      </Container>
    </React.Fragment>
  );
}

function mapStateToProps({ query }) {
  return {
    draftContext: query.meta.skills,
  };
}

export default connect(mapStateToProps)(Skills);
