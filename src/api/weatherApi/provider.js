import { weatherApiBuildUrl } from '../utils/url-builders';
import { converterWeather } from './converter';

export const getWeatherForecast = (lat, lon, lang) => {
  const requestUrl = weatherApiBuildUrl(lat, lon, lang);

  return fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => converterWeather(data.daily));
};
