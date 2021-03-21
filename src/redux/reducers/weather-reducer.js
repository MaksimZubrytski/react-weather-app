import { SET_WEATHER_DATA } from '../actionsTypes/weather-actions-types';

const initialState = {
  todayData: [],
  dailyData: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_WEATHER_DATA:
    return {
      ...state,
      todayData: action.todayData,
      dailyData: action.dailyData,
    };
  default:
    return state;
  }
};

export default weatherReducer;
