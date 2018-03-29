import React from 'react';
import Container from '../../../layout/Container';
import Question from './Question';
import styles from './styles.less';

function Questions() {
  return (
    <Container>
      <div className={styles.backgroundSlant} />
      <h2 className={styles.header}>Questions</h2>
      <div className={styles.questions}>
     <Question number={0}/>
     <Question number={1}/>
     <Question number={2}/>
      </div>
    </Container>
  );
}

export default Questions;
