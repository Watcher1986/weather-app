import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchCityWeather } from '../../../lib/fetchCityWeather';

import { ThunkError } from '../types';

export const getWeatherAnalitics = createAsyncThunk<
  Weather[],
  WeatherProps,
  {
    rejectValue: ThunkError;
  }
>('weatherAnalitics/getWeatherAnalitics', async (args, thunkApi) => {
  const { cities } = args;

  const weatherPromises = cities.map(async ({ geoLocation, city, country }) => {
    const { latitude, longitude } = geoLocation;
    const forecast = await fetchCityWeather(latitude, longitude);
    return {
      forecast,
      city,
      country,
    };
  });

  const response = await Promise.all(weatherPromises);

  if (!response.length || !response) {
    return thunkApi.rejectWithValue('Something went wrong!');
  }

  return response;
});
