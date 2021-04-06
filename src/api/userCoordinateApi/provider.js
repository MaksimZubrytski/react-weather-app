import { coordinatesApiBuildUrl } from '../utils/url-builders';
import { converterCoordinate } from './converter';

export const getUserCoordinatesData = () => {
  const requestUrl = coordinatesApiBuildUrl();

  return fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => converterCoordinate(data));
};
