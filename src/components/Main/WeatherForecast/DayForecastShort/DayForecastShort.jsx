import React from 'react';
import moment from "moment";
import './DayForecastShort.scss';

const DayForecastShort = (props) => {
  const {
    day,
    units,
  } = { ...props };
  const newDate = new Date();
  const weekday = day.dt * 1000;
  newDate.setTime(weekday)
  const imgURL = `owf owf-${day.id} owf-5x`;
  return (
    <div className="short-forecast">
      <p className="short-forecast__title">{moment(newDate).format('dddd')}</p>
      <div className="short-forecast__container">
        <p className="short-forecast__subtitle">
          {units === 'metric' ? Math.round(day.temp) : day.getFarenheit()}
          °
        </p>
        <i className={imgURL} />
      </div>
    </div>
  )
};

export default DayForecastShort;
