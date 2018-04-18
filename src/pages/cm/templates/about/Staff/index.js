import React from 'react';

import Container from '../../../layout/Container';


import Person from './Person';
import styles from './styles.less';

function Staff({ profiles }) {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.staff}>
          {profiles.map((profile, i) => {
            return (
              <Person
                index={i}
                image={profile.meta.image}
                slug={profile.slug}
                name={profile.meta.name}
                title={profile.meta.jobRole}
                description={profile.meta.description}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default Staff;
