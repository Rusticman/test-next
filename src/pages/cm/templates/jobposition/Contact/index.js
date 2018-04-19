import React from 'react';
import Container from '../../../layout/Container';
import styles from './styles.less';

function Contact() {
  return (
    <Container>
      <div className={styles.content}>
        <div className={styles.detail}>
         <h3> If you would like to apply for this position, please forward your CV and we'll be in touch!</h3>
        </div>
        <div className={styles.cta}>
          <a href={'mailto:hello@checkd.media'}>Get in touch</a>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
