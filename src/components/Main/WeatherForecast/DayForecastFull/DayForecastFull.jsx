import React from 'react';
import DayInfoFull from './DayInfoFull/DayInfoFull';
import './DayForecastFull.scss';

const DayForecastFull = (props) => {
  const {
    day,
    units,
    language,
  } = { ...props };
  const imgURL = `owf owf-${day.id} owf-5x img`;
  return (
    <>
      <DayInfoFull day={day} language={language} />
      <div className="container">
        <div className="weather-now">
          <span className="weather-now__text">
            {units === 'metric' ? Math.round(day.temp) : day.getFarenheit()}
          </span>
          <span className="weather-now__text_small">°</span>
        </div>
        <div className="description-container">
          <i className={imgURL} />
          <div className="description">
            <p className="description__text">{day.description}</p>
            <p className="description__text">
              {language === 'Ru' ? 'Ощущается: ' : 'Feels like: '}
              {units === 'metric' ? Math.round(day.feels) : day.getFeelsFahrenheit()}
              °
            </p>
            <p className="description__text">
              {language === 'Ru' ? 'Ветер: ' : 'Wind: '}
              {units === 'metric' ? `${day.wind} m/s` : `${day.getMilePerHour().toFixed(1)} mph`}
            </p>
            <p className="description__text">
              {language === 'Ru' ? 'Влажность: ' : 'Humidity: '}
              {day.humidity}
              {'%'}
            </p>
          </div>
        </div>
      </div>
    </>
  )
};

export default DayForecastFull;
