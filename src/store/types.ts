export type ThunkError = null | string;

export interface IWeatherState {
  weather: Weather[];
  loading: boolean;
  error: ThunkError | undefined;
}
