import React from 'react';
import Carousel from '../../../../../../components/Carousel';
import Job from '../Job';

const options = {
  margin:10,
  stagePadding: 10,
  responsive:{
    '0': {
      items:1,
    },
    '600':{
      items:2,
    },
    '1000': {
      items:3,
    }
  }
};

function Slider({ jobs }) {
  return (

    <Carousel ref="job-slider" options={options}>
      {jobs.map((job, i) => <Job key={'job-'+ i} job={job} />)}
    </Carousel>
  );
}

export default Slider;
