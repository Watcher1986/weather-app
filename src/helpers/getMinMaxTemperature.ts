export const getMinMaxTemperature = (
  mode: string,
  minMax: number | undefined,
  temperatureList: number[]
) => {
  if (minMax) {
    const returArray = temperatureList.filter((item) =>
      mode === 'min' ? item >= minMax : item <= minMax
    );
    return mode === 'min' ? Math.min(...returArray) : Math.max(...returArray);
  }

  return mode === 'min'
    ? Math.min(...temperatureList)
    : Math.max(...temperatureList);
};
