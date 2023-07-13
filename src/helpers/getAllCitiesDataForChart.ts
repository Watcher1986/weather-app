import { getWeekDaysOrder } from './getWeekDaysOrder';

import { HRS_IN_A_DAY } from '../../public/constants/time';

function getAllCitiesChartData(weatherList: Weather[]) {
  const days = getWeekDaysOrder();
  const chartData = [];
  let hoursOffset = HRS_IN_A_DAY;

  for (let i = 0; i < days?.length; i++) {
    let dayTemperatureSum = 0;

    weatherList.forEach(({ forecast }) => {
      const dayTemperaureValues = forecast?.hourly?.temperature_2m.slice(
        hoursOffset - HRS_IN_A_DAY,
        hoursOffset
      );
      const dayTemperaureValuesSum = dayTemperaureValues.reduce(
        (acc, num) => acc + num,
        0
      );
      dayTemperatureSum += dayTemperaureValuesSum / HRS_IN_A_DAY;
    });

    const dayAverageTemperature = dayTemperatureSum / weatherList.length;

    chartData.push({
      name: days[i],
      celsius: dayAverageTemperature.toFixed(1),
    });

    hoursOffset += HRS_IN_A_DAY;
  }

  return chartData;
}

export { getAllCitiesChartData };
