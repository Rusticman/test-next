import React from 'react';
import Container from '../../../layout/Container';
import Question from './Question';
import styles from './styles.less';

function Questions() {
  return (
    <React.Fragment>
      <div className={styles.backgroundSlant} />
    <Container>
      <h2 className={styles.header}>Questions</h2>
      <div className={styles.questions}>
     <Question number={0}/>
     <Question number={1}/>
     <Question number={2}/>
      </div>
    </Container>
    </React.Fragment>
  );
}

export default Questions;
