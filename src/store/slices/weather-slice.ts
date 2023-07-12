import { createSlice } from '@reduxjs/toolkit';

import { getWeatherAnalitics } from '../thunk/weather-thunk';
import { IWeatherState } from '../types';

const initialState = {
  weather: [],
  loading: false,
  error: null,
} as IWeatherState;

const weatherSlice = createSlice({
  name: 'weatherAnalitics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherAnalitics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWeatherAnalitics.fulfilled, (state, action) => {
        state.weather = action.payload;
        state.loading = false;
      })
      .addCase(getWeatherAnalitics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default weatherSlice.reducer;
