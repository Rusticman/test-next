import React from 'react';
import { connect } from 'react-redux';
import idx from 'idx';
import Container from '../../../layout/Container';
import Block from './Block';
import Heading from '../../../layout/Heading';

import styles from './styles.less';

function Blocks({ subheader }) {
  return (
    <section>
      <Heading>{subheader}</Heading>
      <Container className={styles.blocks}>
        <Block block={'block_page_1'} alt={'About'}
               href={'/about'}
               image={'https://cdn.checkd.media/illustrations/about.svg'} />
        <Block block={'block_page_2'} alt={'Partners'}
               href={'/partners'}
               image={'https://cdn.checkd.media/illustrations/partners.svg'} />
        <Block block={'block_page_3'} alt={'About'}
               href={'/news'}
               image={'https://cdn.checkd.media/illustrations/news.svg'} />
      </Container>
    </section>
  );
}

function mapStateToProps({ query }) {
  return {
    subheader: idx(query, q => q.meta.secondSubheader) || '',
  };
}

export default connect(mapStateToProps)(Blocks);
