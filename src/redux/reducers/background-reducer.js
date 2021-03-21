import { SET_BACKGROUND } from '../actionsTypes/background-actions-types'

const initialState = {
  backgroundURL: null,
};

const backgroundReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BACKGROUND:
      return {
        ...state,
        backgroundURL: action.background,
      };
    default:
      return state;
  }
};

export default backgroundReducer;
