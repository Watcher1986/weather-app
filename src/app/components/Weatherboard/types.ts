export type WeatherTableProps = {
  weatherData: Weather[];
  min: number | undefined;
  max: number | undefined;
};

export type SelectHandlerProps = OptionType[] | number;

export type SelectOptionType = OptionType[] | OptionType;
