import React from 'react';
import { connect } from 'react-redux';

import DraftRender from '../../../../../components/DraftRender';

import styles from './styles.less';

function Content({ draftContext }) {
  return (
    <div className={styles.content}>
      <DraftRender draftContext={draftContext} />
    </div>
  );
}

function mapStateToProps({ query }) {
  return {
    draftContext: query.meta.editor_content_state,
  };
}

export default connect(mapStateToProps)(Content);
