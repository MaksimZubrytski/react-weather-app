import { SET_DEGREE_TYPE } from '../actionsTypes/degree-type-actions-types';

export const setDegreeType = (units) => ({
  type: SET_DEGREE_TYPE,
  units,
});
