import React from 'react';

import Container from '../../../layout/Container';
import Card from '../../../layout/Card';

import Person from './Person';
import styles from './styles.less';

function Staff({ lee, jamie }) {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.staff}>
          <Card href={'/about/jamie-knowlson'}>
            <Person
              image={jamie.meta.image}
              name={jamie.meta.name}
              title={jamie.meta.jobRole}
              description={jamie.meta.description}
            />
          </Card>
          <Card href={'/about/lee-struggles'}>
            <Person
              image={lee.meta.image}
              name={lee.meta.name}
              title={lee.meta.jobRole}
              description={lee.meta.description}
            />
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default Staff;
