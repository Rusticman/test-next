import React from 'react';

import Container from '../../../layout/Container';
import Card from '../../../layout/Card';

import Person from './Person';
import styles from './styles.less';

function Staff() {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.staff}>
          <Card href={'/about/jamie-knowlson'}>
            <Person
              image={'http://cdn.checkd.media/images/pjtqp4e-sm.jpg'}
              name={'Jamie Knowlson'}
              title={'SEO'}
              description={'Blah blah blah'}
            />
          </Card>
          <Card href={'/about/lee-struggles'}>
            <Person
              image={'http://cdn.checkd.media/images/w9yqp79-sm.jpg'}
              name={'Lee Struggles'}
              title={'Marketing'}
              description={'Blah blah blah'}
            />
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default Staff;
