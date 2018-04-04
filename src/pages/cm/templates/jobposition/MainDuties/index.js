import React from 'react';
import { connect } from 'react-redux';

import DraftRender from '../../../../../components/DraftRender';
import Container from '../../../layout/Container';

import styles from './styles.less';

function MainDuties({ draftContext }) {
  return (
    <Container>
      <div className={styles.content}>
        <DraftRender draftContext={draftContext} />
      </div>
    </Container>
  );
}

function mapStateToProps({ query }) {console.log('Queries', query);
  return {
    draftContext: query.meta.main_duties,
  };
}

export default connect(mapStateToProps)(MainDuties);
