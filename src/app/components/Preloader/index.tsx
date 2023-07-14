'use client';

import { useRef } from 'react';

import { store } from '@/store';
import { getWeatherAnalitics } from '@/store/thunk/weather-thunk';

import { cities } from '../../../../public/mockdata/cities';

function Preloader() {
  const loaded = useRef(false);

  if (!loaded.current) {
    loaded.current = true;
    store.dispatch(getWeatherAnalitics({ cities }));
  }

  return null;
}

export default Preloader;
