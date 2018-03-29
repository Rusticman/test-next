import React from 'react';

import Container from '../../../layout/Container';

import Partner from './Partner';
import styles from './styles.less';

function Blocks({ partners }) {

  return (
    <Container>
      <div className={styles.grid}>
        {partners.map((p, i) => (
          <div key={i}>
            <Partner partner={p} />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Blocks;
