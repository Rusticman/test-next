import React from 'react';
import Typist from 'react-typist';
import { Delay, SlideRight, SlideLeft } from 'animate-components';

import styles from './styles.less';

import Container from '../../../layout/Container';
import Button from '../../../layout/Button';

import Gradient from './Gradient';

function Hero() {
  return (
    <div className={styles.hero}>
      <Gradient />
      <Container>
        <div className={styles.content}>
          <div className={styles.slogan}>
            <h1>
              <Delay ms={1500}>
                <Typist>We are a unique social marketing company.</Typist>
              </Delay>
            </h1>
            <div className={styles.button}>
              <Delay ms={1000}>
                <SlideLeft duration="0.3s">
                  <div className={styles.bounce}>
                    <Button href="/about">Find out more</Button>
                  </div>
                </SlideLeft>
              </Delay>
            </div>
          </div>
          <div className={styles.graphic}>
            <Delay ms={1000}>
              <SlideRight duration="0.3s">
                <div>
                  <img src="https://cdn.checkd.media/illustrations/main.svg" alt="CheckdMedia" />
                </div>
              </SlideRight>
            </Delay>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
