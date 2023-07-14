export interface IWeather {
  city: Weather | null;
  setCityForChart: (city: Weather) => void;
}
