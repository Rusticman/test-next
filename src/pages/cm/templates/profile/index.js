import React from 'react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Hero from './Hero';
import Page from '../../layout/Page';
import Who from './Who';
import Questions from './Questions';
import styles from './styles.less';
import AboutMe from "./AboutMe";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      push: 0,
      pull: 0,
    };
  }

  render() {
    console.log('PROFILE', this.props);
    const { profile } = this.props;
    return (
      <React.Fragment>
        <Header
          transparent
          offsetTop={10}
        />
        <Hero
          headline={'Profile'}
        />
        <div className={styles.container}>
          <Who profile={profile} />
          <AboutMe profile={profile} />
          <Questions profile={profile} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Page(Profile);
