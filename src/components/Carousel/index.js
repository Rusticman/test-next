import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import Head from 'next/head';
import PropTypes from 'prop-types';
import './styles.less';

class Carousel extends React.Component {
  render(){
    const { children, reference, options, events } = this.props;
    return (
      <React.Fragment>
        <Head>
          <script
            src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
        </Head>
        <OwlCarousel events={events} options={options} ref={reference}>
          {children}
        </OwlCarousel>
      </React.Fragment>
    );
  }
}

Carousel.propTypes = {
  options: PropTypes.object,
  reference: PropTypes.string,
  events: PropTypes.object,
};
Carousel.defaultProps = {
  options: {},
  reference: 'owl-carousel',
  events: {},
};

export default Carousel;
