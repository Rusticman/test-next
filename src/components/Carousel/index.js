import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import Head from 'next/head';
import PropTypes from 'prop-types';
import './styles.less';

function Carousel({ children, ref, options }) {
  return (
    <React.Fragment>
      <Head>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
      </Head>
      <OwlCarousel options={options} ref={ref}>
        {children}
      </OwlCarousel>
    </React.Fragment>
  );
}

Carousel.propTypes = {
  options: PropTypes.object,
  ref: PropTypes.string,
  events: PropTypes.object,
};
Carousel.defaultProps = {
  options: {},
  ref: 'owl-carousel',
  events: {},
};

export default Carousel;
