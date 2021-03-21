import React from 'react';
import Geolocatoin from './Geolocation/Geolocation';
import './Main.scss';
import PlaceLabel from './PlaceLabel/PlaceLabel';
import WeatherForecast from './WeatherForecast/WeatherForecast';

const Main = () => (
  <main className="main">
    <div className="wrapper main__wrapper">
      <PlaceLabel />
      <div className="container">
        <WeatherForecast />
        <Geolocatoin />
      </div>
    </div>
  </main>
);

export default Main;
