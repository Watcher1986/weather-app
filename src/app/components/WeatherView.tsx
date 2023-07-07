import { Chart } from './Chart/Chart';
import Table from './Table/Table';

export const WeatherView = () => {
  return (
    <section className='flex flex-col md:flex-row gap-3'>
      <Chart />
      <Table />
    </section>
  );
};
