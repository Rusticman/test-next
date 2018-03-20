import React from 'react';

import Container from '../../../layout/Container';
import Card from '../../../layout/Card';
import Heading from '../../../layout/Heading';

import styles from './styles.less';

function Blocks() {
  return (
    <section>
      <Heading>Get to know us</Heading>
      <Container className={styles.blocks}>
        <Card href={'/about'}>
          <div className={styles.card}>
            <div className={styles.graphic}>
              <img src="https://cdn.checkd.media/illustrations/about.svg" alt="About" />
            </div>
            <h2>
              About Us
            </h2>
            <p>
              {`CheckdMedia has a lot to offer - check out who we are, what we're about and how we can help promote your brand.`}
            </p>
          </div>
        </Card>

        <Card href={'/partners'}>
          <div className={styles.card}>
            <div className={styles.graphic}>
              <img src="https://cdn.checkd.media/illustrations/partners.svg" alt="Partners" />
            </div>
            <h2>
              Partners
            </h2>
            <p>
              {`We've worked with a wide variety of partners and brands - check out our showcase to see some of our latest work.`}
            </p>
          </div>
        </Card>

        <Card href={'/news'}>
          <div className={styles.card}>
            <div className={styles.graphic}>
              <img src="https://cdn.checkd.media/illustrations/news.svg" alt="News" />
            </div>
            <h2>
              News
            </h2>
            <p>
              {`Keep up to date with the latest industry news & announcements.`}
            </p>
          </div>
        </Card>
      </Container>
    </section>

  );
}

export default Blocks;
