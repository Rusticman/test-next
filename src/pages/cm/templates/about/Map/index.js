import React from 'react';
import GoogleMapReact from 'google-map-react';

import styles from './styles.less';

const coords = {
  lat: 53.480239,
  lng: -2.241975,
};

const Marker = () => <img src="https://cdn.checkd.media/favicons/cm.png" alt="Checkd Media" />;

function Map() {
  return (
    <div className={styles.map}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyAy-5bcDVPpTI5RBKEc_vBup9PGoBH_aKE',
          language: 'en',
        }}
        defaultCenter={coords}
        defaultZoom={16}
      >
        <Marker {...coords} />
      </GoogleMapReact>
    </div>
  );
}

export default Map;
