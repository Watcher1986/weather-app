'use client';

import { useEffect } from 'react';

import { useDispatch, useSelector } from '@/store/hooks/reduxHooks';
import { getWeatherAnalitics } from '@/store/thunk/weather-thunk';

import { WeatherChart } from './Chart/Chart';
import Weatherboard from './Weatherboard';

import { cities } from '../../../public/mockdata/cities';

export function WeatherView() {
  const dispatch = useDispatch();
  const { weather } = useSelector((state) => state.weather);

  useEffect(() => {
    !weather.length && dispatch(getWeatherAnalitics({ cities }));
  }, []);

  return (
    <section className='flex flex-col-reverse min-[998px]:flex-row w-[96%] md:w-full gap-3'>
      <WeatherChart />
      <Weatherboard />
    </section>
  );
}
