import { useEffect } from 'react';

import { useDispatch, useSelector } from '@/store/hooks/reduxHooks';
import { getWeatherAnalitics } from '@/store/thunk/weather-thunk';

import { WeatherChart } from './Chart/Chart';
import Weatherboard from './Weatherboard';

import { cities } from '../../../public/mockdata/cities';

export const WeatherView = () => {
  const { weather } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    !weather.length && dispatch(getWeatherAnalitics({ cities }));
  }, []);

  return (
    <section className='flex flex-col-reverse min-[998px]:flex-row w-[96%] md:w-full gap-3'>
      <WeatherChart />
      <Weatherboard />
    </section>
  );
};
