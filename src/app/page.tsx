'use client';
import useWeather from '@/hooks/useWeather';

import { WeatherView } from './components/WeatherView';
import { cities } from '../../public/mockdata/countries';

export default function Home() {
  const { weather, loading } = useWeather(cities);

  console.log(weather, loading);

  return (
    <main className='flex min-h-screen md:[margin-inline:10%] flex-col gap-2 justify-center items-center text-white bg-[#373737]'>
      <h1 className='text-2xl font-bold bg-slate-400'>Home Page</h1>
      <WeatherView />
    </main>
  );
}
