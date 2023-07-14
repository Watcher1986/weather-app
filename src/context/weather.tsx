'use client';

import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useMemo,
} from 'react';

import { IWeather } from './types';

const WeatherContext = createContext<IWeather | null>(null);
const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (context === null) {
    throw new Error('useWeatherContext must be used within a WeatherProvider');
  }

  return context;
};

const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [city, setCity] = useState<Weather | null>(null);

  const setCityForChart = useCallback((city: Weather) => {
    setCity(city);
  }, []);

  const context = useMemo(
    () => ({
      city,
      setCityForChart,
    }),
    [city, setCityForChart]
  );

  return (
    <WeatherContext.Provider value={context}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider, useWeatherContext };
