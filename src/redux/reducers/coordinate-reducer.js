import { SET_LOCATION_DATA, SET_SEARCH_DATA, SET_ERROR, TOGGLE_IS_FETCHING }
  from '../actionsTypes/coordinate-actions-types';

const initialState = {
  userCity: null,
  userLocation: null,
  place: null,
  latitude: null,
  longitude: null,
  isFetching: true,
  isError: false,
};

const coordinatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION_DATA:
      return {
        ...state,
        ...action.data,
        latitude: action.data.userLocation.split(",")[0],
        longitude: action.data.userLocation.split(",")[1],
        place: null,
      };
    case SET_SEARCH_DATA:
      return {
        ...state,
        ...action.data,
      };
    case SET_ERROR: {
      return { ...state, isError: action.isError };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};

export default coordinatesReducer;
