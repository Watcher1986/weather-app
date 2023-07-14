import Providers from './components/Providers';
import { WeatherView } from './components/WeatherView';
import Preloader from './components/Preloader';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col gap-2 justify-center items-center text-white bg-[#373737]'>
      <Preloader />
      <Providers>
        <WeatherView />
      </Providers>
    </main>
  );
}
