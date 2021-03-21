import React from 'react';
import './Geolocatoin.scss';
import Coordinates from './Coordinates/Coordinates';
import Map from './Map/Map';

const Geolocatoin = () => (
  <div>
    <Map />
    <Coordinates />
  </div>
);

export default Geolocatoin;
