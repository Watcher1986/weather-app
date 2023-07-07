'use client';
import { useState, useEffect } from 'react';

import { fetchCityWeather } from '../../lib/fetchCityWeather';

const useWeather = (cities: City[]) => {
  const [weather, setWeather] = useState<Weather[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      const weatherPromises = cities.map(
        async ({ geoLocation, city, country }) => {
          const { latitude, longitude } = geoLocation;
          const forecast = await fetchCityWeather(latitude, longitude);
          return {
            forecast,
            city,
            country,
          };
        }
      );

      const weathers = await Promise.all(weatherPromises);
      setWeather(weathers);
      setLoading(false);
    };

    fetchWeather();
  }, [cities]);

  return { weather, loading };
};

export default useWeather;
