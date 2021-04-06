import { Background } from '../../common/entities/Background';
import { Coordinate } from '../../common/entities/Coordinate';
import { CoordinateCity } from '../../common/entities/CoordinateCity';
import { Weather } from '../../common/entities/Weather';

export const converterCoordinate = (data) => (
  new Coordinate({
    userCity: data.city,
    userLocation: data.loc,
  })
);

export const converterWeather = (data) => (
  data.map((dataItem) => (
    new Weather({
      dt: dataItem.dt,
      temp: dataItem.temp.day,
      description: dataItem.weather[0].description,
      feels: dataItem.feels_like.day,
      wind: dataItem.wind_speed,
      humidity: dataItem.humidity,
      id: dataItem.weather[0].id,
    })
  ))
);

export const converterCityCoordinate = (data) => (
  new CoordinateCity({
    place: data.formatted,
    lat: data.geometry.lat,
    lng: data.geometry.lng,
  })
);

export const converterBackground = (data) => (
  new Background({ background: data.urls.full })
);
