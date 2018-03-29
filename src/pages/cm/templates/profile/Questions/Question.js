import React from 'react';
import { connect } from 'react-redux';
import idx from 'idx';
import Container from '../../../layout/Container';
import styles from './styles.less';

function Question({ question, answer }) {
  return (
    <Container>
      <div className={styles.question}>
        <h3>{question}</h3>
        <div>{answer}</div>
      </div>
    </Container>
  );
}

function mapStateToProps({ query }, { number }) {
  return {
    question: idx(query, q => q.meta.block_questions[number].question) || '',
    answer: idx(query, q => q.meta.block_questions[number].answer) || '',
  };
}

export default connect(mapStateToProps)(Question);
