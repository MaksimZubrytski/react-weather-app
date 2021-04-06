import { SET_LANGUAGE } from '../actionsTypes/language-actions-types';

export const setLanguage = (lang) => ({
  type: SET_LANGUAGE,
  lang,
});
