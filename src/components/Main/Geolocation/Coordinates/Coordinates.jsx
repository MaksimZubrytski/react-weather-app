import React from 'react';
import { connect } from 'react-redux';
import './Coordinates.scss';

const Coordinates = (props) => {
  const { latitude, longitude, language } = { ...props };

  const convertToDegree = (coor) => {
    const munites = Number(`0.${coor.split('.')[1]}`) * 60;

    return `${coor.split('.')[0]}° ${Math.round(munites)}'`;
  };

  return (
    <div className='coordinates'>
      <p className='coordinates__text'>
        {language === 'Ru' ? `Широта: ` : `Latitude: `}
        {convertToDegree(latitude)}
      </p>
      <p className='coordinates__text'>
        {language === 'Ru' ? `Долгота: ` : `Longitude: `}
        {convertToDegree(longitude)}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  latitude: state.coordinates.latitude,
  longitude: state.coordinates.longitude,
  language: state.languageData.language,
});

export default connect(mapStateToProps, null)(Coordinates);
