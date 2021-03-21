import React from 'react';
import { connect } from 'react-redux';
import { setLanguage } from '../../../../redux/actions/language-actions';
import { getWeather } from '../../../../redux/actions/weather-actions';
import './Language.scss';

const Language = (props) => {
  const {
    language,
    setLanguageAC,
    getWeatherAC,
    latitude,
    longitude,
  } = { ...props };

  const handleChange = (e) => {
    setLanguageAC(e.target.value)
    getWeatherAC(latitude, longitude, e.target.value)
  }
  return (
    <div className="language">
      <select defaultValue={language} className="select language__select" onChange={handleChange}>
        <option value="En">En</option>
        <option value="Ru">Ru</option>
      </select>
    </div>
  )
};

const mapStateToProps = (state) => ({
  language: state.languageData.language,
  latitude: state.coordinates.latitude,
  longitude: state.coordinates.longitude,
});

export default connect(mapStateToProps,
  { setLanguageAC: setLanguage, getWeatherAC: getWeather })(Language);
