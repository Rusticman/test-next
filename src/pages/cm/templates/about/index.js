import React from 'react';
import cx from 'classnames';
import Page from '../../layout/Page';
import Hero from '../../layout/Hero';
import Footer from '../../layout/Footer';
import Header from '../../layout/Header';

import Map from './Map';
import Office from './Office';
import Person from './Person';

import styles from './styles.less';

class About extends React.Component {

  render() {
     const { about:{meta:{block_hero}} } = this.props;
     const { headline, secondary } = block_hero;

    return (
      <React.Fragment>
        <Header
          transparent
          offsetTop={285}
        />
        <Hero
          image={'https://images.unsplash.com/photo-1496902526517-c0f2cb8fdb6a?auto=format&fit=crop&w=1350&q=80'}
          headline={headline}
          description={secondary}
        />
        <div className={cx(styles.container, styles.shadow)}>
          <Office />
          <Map />
        </div>
        <h2
          className={styles.header}
        >FOUNDERS
        </h2>
        <div className={styles.responsive}>
          <div className={cx(styles.people, styles.width)}>
            <Person
              image="http://cdn.checkd.media/images/w9yqp79-xl.jpg"
              to='/profile/639'
            />
            <Person
              image="http://cdn.checkd.media/images/pjtqp4e-xl.jpg"
              to='/profile/654'
            />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Page(About);
