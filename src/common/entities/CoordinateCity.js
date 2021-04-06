export class CoordinateCity {
  constructor({ place, lat, lng }) {
    this.place = place;
    this.lat = String(lat);
    this.lng = String(lng);
  }
}
