import React from 'react';
import { connect } from 'react-redux';

import DraftRender from '../../../../../components/DraftRender';
import Container from '../../../layout/Container';
import Heading from '../../../layout/Heading';
import styles from './styles.less';

function Content({ draftContext, title }) {
  return (
    <Container>
      <div className={styles.content}>
        <Heading>{title}</Heading>
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
