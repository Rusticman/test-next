import React from 'react';
import { connect } from 'react-redux';

import DraftRender from '../DraftRender';
import Container from '../../pages/cm/layout/Container';

import styles from './styles.less';

function Content({ draftContext }) {
  return (
    <div className={styles.block}>
      <Container>
        <div className={styles.content}>
          <DraftRender draftContext={draftContext} />
        </div>
      </Container>
    </div>
  );
}

function mapStateToProps({ query }) {
  return {
    draftContext: query.meta.editor_state,
  };
}

export default connect(mapStateToProps)(Content);
