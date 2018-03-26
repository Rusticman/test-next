import React from 'react';
import { connect } from 'react-redux';
import idx from 'idx';
import Container from '../../../layout/Container';

import Step from './Step';
import styles from './styles.less';

function Flowchart({ step_1_title, step_1_description, step_1_image, step_2_title, step_2_description, step_2_image, step_3_title, step_3_description, step_3_image, step_4_title, step_4_description, step_4_image }) {
  return (
    <div className={styles.container}>
      <Container>
        <h2>Our Process</h2>
        <div className={styles.flowchart}>
          <Step
            image={`http://cdn.checkd.media/images/${step_1_image}-lg.jpg`}
            title={step_1_title}
            description={step_1_description}
          />
          <Step
            image={`http://cdn.checkd.media/images/${step_2_image}-lg.jpg`}
            title={step_2_title}
            description={step_2_description}
          />
          <Step
            image={`http://cdn.checkd.media/images/${step_3_image}-lg.jpg`}
            title={step_3_title}
            description={step_3_description}
          />
          <Step
            image={`http://cdn.checkd.media/images/${step_4_image}-lg.jpg`}
            title={step_4_title}
            description={step_4_description}
          />
        </div>
      </Container>
    </div>
  );
}

function mapStateToProps({ query }) {
  return {
    step_1_title: idx(query, q => q.meta.step_1.title) || '',
    step_1_description: idx(query, q => q.meta.step_1.description) || '',
    step_1_image: idx(query, q => q.meta.step_1.image) || '',
    step_2_title: idx(query, q => q.meta.step_2.title) || '',
    step_2_description: idx(query, q => q.meta.step_2.description) || '',
    step_2_image: idx(query, q => q.meta.step_2.image) || '',
    step_3_title: idx(query, q => q.meta.step_3.title) || '',
    step_3_description: idx(query, q => q.meta.step_3.description) || '',
    step_3_image: idx(query, q => q.meta.step_3.image) || '',
    step_4_title: idx(query, q => q.meta.step_4.title) || '',
    step_4_description: idx(query, q => q.meta.step_4.description) || '',
    step_4_image: idx(query, q => q.meta.step_4.image) || '',
  };
}

export default connect(mapStateToProps)(Flowchart);
