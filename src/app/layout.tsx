'use client';
import type { Metadata } from 'next';
import { Provider } from 'react-redux';
import { Oxygen } from 'next/font/google';

import { WeatherProvider } from '@/context/weather';
import { store } from '@/store';

import './globals.css';

const oxygen = Oxygen({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'European weather monitoring app',
  keywords: 'weather, monitoring, european, weather, app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Provider store={store}>
        <WeatherProvider>
          <body
            className={`${oxygen.className} py-5 min-[768px]:[margin-inline:10%]`}
          >
            {children}
          </body>
        </WeatherProvider>
      </Provider>
    </html>
  );
}
