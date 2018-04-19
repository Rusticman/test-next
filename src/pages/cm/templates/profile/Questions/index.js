import React from 'react';
import Container from '../../../layout/Container';
import Question from './Question';
import Heading from '../../../layout/Heading';
import styles from './styles.less';

function Questions() {
  return (
    <React.Fragment>
      <div className={styles.backgroundSlant} />
    <Container className={styles.content}>
      <Heading h1={false} className={styles.header}>Questions</Heading>
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
