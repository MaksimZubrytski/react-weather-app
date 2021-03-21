export class Weather {
  constructor({
    dt, temp, description, feels, wind, humidity, id,
  }) {
    this.dt = dt;
    this.temp = temp;
    this.description = description;
    this.feels = feels;
    this.wind = wind;
    this.humidity = humidity;
    this.id = id;
  }

  getFarenheit() {
    const fahrenheit = Math.round((this.temp * (9 / 5)) + 32);
    return fahrenheit;
  }

  getFeelsFahrenheit() {
    const feelsFahrenheit = Math.round((this.feels * (9 / 5)) + 32);
    return feelsFahrenheit;
  }

  getMilePerHour() {
    const speedImperic = this.wind * 2.237;
    return speedImperic;
  }
}
