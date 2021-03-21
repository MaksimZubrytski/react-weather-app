import { COORDINATES_URL, WEATHER_URL, SEARCH_URL } from '../constants/someApi';

export const coordinatesApiBuildUrl = () => (
  `${COORDINATES_URL}`
);

export const weatherApiBuildUrl = (lat, lon, lang) => (
  `${WEATHER_URL}/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&lang=${lang}&appid=1ec00b448111365acb6a2ec3c7366254&units=metric`
);

export const searchApiBuildUrl = (city) => (
  `${SEARCH_URL}/json?q=${city}&key=bc66474e55b846ee9ea7901834f7a0a1&pretty=1&no_annotations=1`
)
