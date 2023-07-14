'use client';

import { Provider } from 'react-redux';

import { WeatherProvider } from '@/context/weather';
import { store } from '@/store';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <WeatherProvider>{children}</WeatherProvider>
    </Provider>
  );
}

export default Providers;
