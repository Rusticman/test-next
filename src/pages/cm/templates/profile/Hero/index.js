import React from 'react';
import Hero from '../../../layout/Hero';

function HeroContainer({ headline }) {
  return (
    <React.Fragment>
      <Hero
        scrollTo={500}
        headline={headline}
        image="//cdn.checkd.media/images/bq5a0ki6-lg.jpg"
      />
    </React.Fragment>
  );
}

export default HeroContainer;
