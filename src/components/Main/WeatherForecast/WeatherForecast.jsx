import React from 'react';
import { connect } from 'react-redux';
import DayForecastFull from './DayForecastFull/DayForecastFull';
import './WeatherForecast.scss';
import DayForecastShort from './DayForecastShort/DayForecastShort';

const WeatherForecast = (props) => {
  const {
    dailyData,
    todayData,
    units,
    language,
  } = { ...props };
  const formatDayFullCards = todayData
    .map((day) => (
      <DayForecastFull
        day={day}
        key={day.dt}
        units={units}
        language={language}
      />
    ));
  const formatDayShortCards = dailyData
    .map((day) => <DayForecastShort units={units} day={day} key={day.dt} language={language} />);

  return (
    <div>
      {formatDayFullCards[0]}
      <div className='layout-3-column'>
        {formatDayShortCards[1]}
        {formatDayShortCards[2]}
        {formatDayShortCards[3]}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todayData: state.weather.todayData,
  dailyData: state.weather.dailyData,
  units: state.degreeTypeData.units,
  language: state.languageData.language,
});

export default connect(mapStateToProps, null)(WeatherForecast);
