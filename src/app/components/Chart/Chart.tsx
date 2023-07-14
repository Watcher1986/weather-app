'use client';

import { useMemo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

import { useSelector } from '@/store/hooks/reduxHooks';
import { useWeatherContext } from '@/context/weather';
import { getCityChartData } from '@/helpers/getCityChartData';
import { getAllCitiesChartData } from '@/helpers/getAllCitiesDataForChart';

export const WeatherChart = () => {
  const { weather } = useSelector((state) => state.weather);
  const { city } = useWeatherContext();

  const chartData = useMemo(() => {
    if (city === null) return getAllCitiesChartData(weather);
    return getCityChartData(city?.forecast?.hourly?.temperature_2m);
  }, [city, weather]);

  return (
    <div className='w-full min-[998px]:max-w-[453px] h-[432px] rounded-2xl bg-[#1a1a1a] px-3 py-2 relative'>
      <h5 className='absolute top-3 left-5 text-white'>
        Analitics {city === null ? 'for all cities' : city.city}
      </h5>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart data={chartData ?? []}>
          <defs>
            <linearGradient id='colorGradient' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stopColor='#B3FC4F' stopOpacity={1} />
              <stop offset='100%' stopColor='#173102' stopOpacity={1} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray='3 3'
            vertical={false}
            strokeWidth={0.8}
            strokeOpacity={0.7}
          />
          <XAxis
            dataKey='name'
            stroke='#fff'
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke='#888888'
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value} ℃`}
          />
          <Tooltip
            formatter={(value) => `${value}℃`}
            contentStyle={{
              fontSize: '12px',
              backgroundColor: '#515151',
              color: '#fff',
              borderRadius: '8px',
            }}
          />
          <Legend verticalAlign='top' height={52} align='right' />
          <ReferenceLine y={0} stroke='#888888' />
          <Bar
            dataKey='celsius'
            fill='url(#colorGradient)'
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
