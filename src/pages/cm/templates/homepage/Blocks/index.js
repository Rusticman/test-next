import React from 'react';
import { connect } from 'react-redux';
import idx from 'idx';
import Container from '../../../layout/Container';
import Card from '../../../layout/Card';
import Heading from '../../../layout/Heading';

import styles from './styles.less';

function Blocks({ block_title_1, block_description_1, block_title_2, block_description_2, block_title_3, block_description_3, subheader }) {
  return (
    <section>
      <Heading>{subheader}</Heading>
      <Container className={styles.blocks}>
        <Card href={'/about'}>
          <div className={styles.card}>
            <div className={styles.graphic}>
              <img src="https://cdn.checkd.media/illustrations/about.svg"
                   alt="About" />
            </div>
            <h2>
              {block_title_1}
            </h2>
            <p>
              {block_description_1}
            </p>
          </div>
        </Card>

        <Card href={'/partners'}>
          <div className={styles.card}>
            <div className={styles.graphic}>
              <img src="https://cdn.checkd.media/illustrations/partners.svg"
                   alt="Partners" />
            </div>
            <h2>
              {block_title_2}
            </h2>
            <p>
              {block_description_2}
            </p>
          </div>
        </Card>

        <Card href={'/news'}>
          <div className={styles.card}>
            <div className={styles.graphic}>
              <img src="https://cdn.checkd.media/illustrations/news.svg"
                   alt="News" />
            </div>
            <h2>
              {block_title_3}
            </h2>
            <p>
              {block_description_3}
            </p>
          </div>
        </Card>
      </Container>
    </section>

  );
}

function mapStateToProps({ query }) {
  return {
    block_title_1: idx(query, q => q.meta.block_page_1.title) || '',
    block_description_1: idx(query, q => q.meta.block_page_1.description) || '',
    block_title_2: idx(query, q => q.meta.block_page_2.title) || '',
    block_description_2: idx(query, q => q.meta.block_page_2.description) || '',
    block_title_3: idx(query, q => q.meta.block_page_3.title) || '',
    block_description_3: idx(query, q => q.meta.block_page_3.description) || '',
    subheader: idx(query, q => q.meta.secondSubheader) || '',
  };
}

export default connect(mapStateToProps)(Blocks);
