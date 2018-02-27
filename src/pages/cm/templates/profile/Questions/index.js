import React, { Component } from 'react';
import styles from '../styles.less';

class Questions extends Component {

  render() {
    const { profile: { meta: { block_questions } } } = this.props;
    let column = 1;
    switch(block_questions.length){
      case 1:
        column = 4;
        break;
      case 2:
      case 3:
      case 4:
        column = 3;
        break;
      case 5:
        column = 2;
        break;
      case 6:
        column = 1;
        break;
    }

    return (
      <React.Fragment>
        {block_questions.map((item, i) => {


          return (
            <div className={styles['question-container' + (i + column)]}
                 key={'questions-' + i}
            >
              <div className={styles.q}>
                <span><b>Q:</b> {item.question}</span>
              </div>
              <div className={styles.a}>
                <span><b>A:</b>{item.answer}</span>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Questions;
