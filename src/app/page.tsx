'use client';

import { WeatherView } from './components/WeatherView';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col gap-2 justify-center items-center text-white bg-[#373737]'>
      <WeatherView />
    </main>
  );
}
