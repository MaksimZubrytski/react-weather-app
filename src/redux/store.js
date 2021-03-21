import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from "redux-thunk";
import coordinatesReducer from './reducers/coordinate-reducer';
import weatherReducer from './reducers/weather-reducer';
import degreeTypeReducer from './reducers/degree-type-reducer';
import languageReducer from './reducers/language-reducer';
import backgroundReducer from './reducers/background-reducer';

const reducers = combineReducers({
  coordinates: coordinatesReducer,
  weather: weatherReducer,
  degreeTypeData: degreeTypeReducer,
  languageData: languageReducer,
  backgroundData: backgroundReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
