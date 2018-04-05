import React from 'react';
import { connect } from 'react-redux';

import DraftRender from '../../../../../components/DraftRender';
import Container from '../../../layout/Container';

import styles from './styles.less';

function Content({ draftContext, title }) {
  return (
    <Container>
      <div className={styles.content}>
        <h1>{title}</h1>
        <DraftRender draftContext={draftContext} />
      </div>
    </Container>
  );
}

function mapStateToProps({ query }) {
  return {
    draftContext: query.meta.editor_content_state,
    title: query.meta.title,
  };
}

export default connect(mapStateToProps)(Content);
