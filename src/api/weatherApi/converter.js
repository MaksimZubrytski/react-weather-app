import { Weather } from '../../common/entities/Weather';

export const converterWeather = (data) => (
  data.map((dataItem) => (
    new Weather({
      dateTime: dataItem.dt,
      temp: dataItem.temp.day,
      description: dataItem.weather[0].description,
      feels: dataItem.feels_like.day,
      wind: dataItem.wind_speed,
      humidity: dataItem.humidity,
      id: dataItem.weather[0].id,
    })
  ))
);
