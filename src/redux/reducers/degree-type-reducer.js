import { SET_DEGREE_TYPE } from '../actionsTypes/degree-type-actions-types';

const initialState = { units: 'metric' };

const degreeTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEGREE_TYPE:
      return {
        ...state,
        units: action.units,
      };
    default:
      return state;
  }
};

export default degreeTypeReducer;
