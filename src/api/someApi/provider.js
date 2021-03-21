import { BACKGROUND_URL } from '../constants/someApi';
import { coordinatesApiBuildUrl, searchApiBuildUrl, weatherApiBuildUrl } from '../utils/url-builders';
import {
  converterCoordinate, converterWeather, converterCityCoordinate, converterBackground,
} from './converter';

export const getCoordinatesData = () => {
  const requestUrl = coordinatesApiBuildUrl();

  return fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => converterCoordinate(data));
};

export const getWeatherForecast = (lat, lon, lang) => {
  const requestUrl = weatherApiBuildUrl(lat, lon, lang);

  return fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => converterWeather(data.daily))
};

export const getCityCoordinates = (city) => {
  const requestUrl = searchApiBuildUrl(city);
  return fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.total_results === 0) {
        return []
      }
      return converterCityCoordinate(data.results[0])
    })
}

export const getBackgroundImage = () => (
  fetch(BACKGROUND_URL)
    .then((response) => response.json())
    .then((data) => (converterBackground(data)))
)
