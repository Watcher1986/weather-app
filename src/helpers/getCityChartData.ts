import { getWeekDaysOrder } from './getWeekDaysOrder';

import { HRS_IN_A_DAY } from '../../public/constants/time';

function getCityChartData(temperatureList: number[]) {
  const days = getWeekDaysOrder();
  const chartData = [];
  let hoursOffset = HRS_IN_A_DAY;

  for (let i = 0; i < days?.length; i++) {
    const dayTemperaureValues = temperatureList.slice(
      hoursOffset - HRS_IN_A_DAY,
      hoursOffset
    );
    const dayTemperaureValuesSum = dayTemperaureValues.reduce(
      (acc, num) => acc + num,
      0
    );
    const dayAverageTemperature = dayTemperaureValuesSum / HRS_IN_A_DAY;

    chartData.push({
      name: days[i],
      celsius: dayAverageTemperature.toFixed(1),
    });

    hoursOffset += HRS_IN_A_DAY;
  }

  return chartData;
}
export { getCityChartData };
