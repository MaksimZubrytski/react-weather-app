import { BACKGROUND_URL } from '../constants/backgroundApi';
import { converterBackground } from './converter';

export const getBackgroundImage = () => (
  fetch(BACKGROUND_URL)
    .then((response) => response.json())
    .then((data) => (converterBackground(data)))
);
