import { SET_LANGUAGE } from '../actionsTypes/language-actions-types';

const initialState = { language: 'Ru' };

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.lang,
      };
    default:
      return state;
  }
};

export default languageReducer;
