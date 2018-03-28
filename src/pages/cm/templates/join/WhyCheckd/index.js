import React from 'react';
import Container from '../../../layout/Container';
import Reason from './reason';
import styles from './styles.less';

function WhyCheckd() {
  return (
    <Container>
      <h1>Why Check'd Media?</h1>
      <div className={styles.reasons}>
        <Reason title={'creative'} description={'Think on the fly'}/>
        <Reason title={'trustful'} description={'You\'re brand is safe with us!'}/>
        <Reason title={'forward'} description={'We\'ll take you to the next step'}/>
      </div>
    </Container>
  );
}

export default WhyCheckd;

