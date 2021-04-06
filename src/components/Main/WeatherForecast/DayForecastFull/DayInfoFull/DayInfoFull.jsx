import React, { useEffect, useState } from 'react';
import moment from 'moment';
import "moment/min/locales";
import './DayInfoFull.scss';

const DayInfoFull = (props) => {
  const {
    day,
    language,
  } = { ...props };
  const newDate = new Date();
  const weekday = day.dateTime * 1000;

  newDate.setTime(weekday);

  if (language === 'Ru') {
    moment.locale('ru');
  } else {
    moment.locale('en');
  }

  const [time, setTime] = useState(newDate);

  const tick = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      tick();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <>
      <p className='full-date'>
        {moment(newDate).format('dddd')}
        {` `}
        {moment(newDate).format('Do MMMM')}
        <time className='full-date__time'>{time.toLocaleTimeString()}</time>
      </p>
    </>
  );
};

export default DayInfoFull;
