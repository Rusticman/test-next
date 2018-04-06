import React from 'react';
import { connect } from 'react-redux';

import DraftRender from '../../../../../components/DraftRender';
import Container from '../../../layout/Container';
import Heading from '../../../layout/Heading';
import styles from './styles.less';

function MainDuties({ draftContext }) {
  return (
    <Container className={styles.content}>
      <div className={styles.duties}>
        <Heading>Main Duties </Heading>
        <DraftRender draftContext={draftContext} />
      </div>
    </Container>
  );
}

function mapStateToProps({ query }) {
  return {
    draftContext: query.meta.main_duties,
  };
}

export default connect(mapStateToProps)(MainDuties);
