import { SET_WEATHER_DATA } from '../actionsTypes/weather-actions-types'
import { getWeatherForecast } from "../../api/someApi/provider";

export const setWeatherData = (todayData, dailyData) => ({
  type: SET_WEATHER_DATA,
  todayData,
  dailyData,
});

export const getWeather = (lat, lon, lang) => (
  (dispatch) => {
    getWeatherForecast(lat, lon, lang).then((data) => {
      const dailyData = data;
      const todayData = [data[0]]
      console.log(data[0])
      dispatch(setWeatherData(todayData, dailyData));
    });
  }
)
