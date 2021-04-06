import { Background } from '../../common/entities/Background';

export const converterBackground = (data) => (
  new Background({ background: data.urls.full })
);
