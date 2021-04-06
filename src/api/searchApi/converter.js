import { CoordinateCity } from '../../common/entities/CoordinateCity';

export const converterCityCoordinate = (data) => (
  new CoordinateCity({
    place: data.formatted,
    lat: data.geometry.lat,
    lng: data.geometry.lng,
  })
);
