import { searchApiBuildUrl } from '../utils/url-builders';
import { converterCityCoordinate } from './converter';

export const getCityCoordinates = (city) => {
  const requestUrl = searchApiBuildUrl(city);

  return fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.total_results === 0) {
        return [];
      }

      return converterCityCoordinate(data.results[0]);
    });
};
