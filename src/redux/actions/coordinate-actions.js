import { SET_LOCATION_DATA, SET_SEARCH_DATA, SET_ERROR, TOGGLE_IS_FETCHING }
  from '../actionsTypes/coordinate-actions-types';

export const setCoordinatesData = (userCity, userLocation) => ({
  type: SET_LOCATION_DATA,
  data: { userCity, userLocation },
});

export const setSearchData = (place, latitude, longitude) => ({
  type: SET_SEARCH_DATA,
  data: { place, latitude, longitude },
});

export const setError = (isError) => ({
  type: SET_ERROR,
  isError,
});

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
