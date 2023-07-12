export type Error = null | string;

export interface IWeatherState {
  weather: Weather[];
  loading: boolean;
  error: Error | undefined;
}
