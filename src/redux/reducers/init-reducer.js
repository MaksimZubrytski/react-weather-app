import {
  getBackgroundImage, getCityCoordinates, getCoordinatesData, getWeatherForecast,
} from "../../api/someApi/provider";
import { setBackground } from "../actions/background-actions";
import {
  setCoordinatesData, setSearchData, toggleIsFetching, setError,
} from "../actions/coordinate-actions";
import { setWeatherData } from "../actions/weather-actions";

export const initAppState = (lang) => (
  (dispatch) => {
    dispatch(setError(false))
    dispatch(toggleIsFetching(true))
    getBackgroundImage().then((data) => {
      dispatch(setBackground(data.background));
      document.body.style.background = `linear-gradient(180deg, rgba(8, 15, 26, 0.59) 0%, rgba(17, 17, 46, 0.46) 100%), url(${data.background})`;
      document.body.style.backgroundSize = 'cover';
    }).then(() => {
      getCoordinatesData().then(({
        userCity, userLocation,
      }) => {
        dispatch(setCoordinatesData(userCity, userLocation));
        return { userCity, userLocation }
      }).then(({
        userLocation,
      }) => {
        const latitude = userLocation.split(",")[0];
        const longitude = userLocation.split(",")[1];
        getWeatherForecast(latitude, longitude, lang).then((data) => {
          const dailyData = data;
          const todayData = [data[0]]
          dispatch(setWeatherData(todayData, dailyData));
        }).then(() => {
          dispatch(toggleIsFetching(false));
        });
      })
    })
  }
)

export const initSearchState = (city, lang) => (
  (dispatch) => {
    dispatch(setError(false))
    dispatch(toggleIsFetching(true));
    getCityCoordinates(city).then(({
      place, lat, lng,
    }) => {
      if (place === undefined) {
        dispatch(setError(true))
        return false;
      }
      dispatch(setSearchData(place, lat, lng));
      return { lat, lng }
    }).then(({
      lat, lng,
    }) => {
      if (lat === undefined) {
        return false;
      }
      getWeatherForecast(lat, lng, lang).then((data) => {
        const dailyData = data;
        const todayData = [data[0]]
        dispatch(setWeatherData(todayData, dailyData));
        dispatch(toggleIsFetching(false));
      });
      return true;
    })
  }
)
