import React from 'react';
import Container from '../../../layout/Container';
import styles from './styles.less';

function Contact() {
  return (
    <Container>
      <div className={styles.content}>
        <div className={styles.detail}>
         <h3> Don't see a job that matches your skills but think we'll be a great
          fit?
           Send over your CV and we'll be in touch!</h3>
        </div>
        <div className={styles.cta}>
          <a href={'mailto:hello@checkd.media'}>Get in touch</a>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
