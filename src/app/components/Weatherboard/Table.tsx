import { getMinMaxTemperature } from '@/helpers/getMinMaxTemperature';
import { useWeatherContext } from '@/context/weather';

import { WeatherTableProps } from './types';

const Table: React.FC<WeatherTableProps> = ({ weatherData, min, max }) => {
  const { setCityForChart } = useWeatherContext();

  return (
    <div className='w-full h-full border border-[#313131] rounded-2xl overflow-clip'>
      <div className='custom-scrollbar w-full h-full overflow-auto'>
        <table className='w-full h-full'>
          <thead className='sticky top-0 bg-[#030303] text-sm text-[#fdfcff]'>
            <tr className='grid grid-cols-4'>
              <td className='flex items-center justify-start py-[9px] pl-[20px] font-bold'>
                City
              </td>
              <td className='flex justify-end border-solid border-[#313131] border-l py-[9px] pr-[15px] font-bold float-right'>
                Temperature max
              </td>
              <td className='flex justify-end border-solid border-[#313131] border-l py-[9px] pr-[15px] font-bold float-right'>
                Temperature min
              </td>
              <td className='flex justify-end border-solid border-[#313131] border-l py-[9px] pr-[15px] font-bold float-right'>
                Wind direction
              </td>
            </tr>
          </thead>
          <tbody className='text-sm'>
            {weatherData.map(({ city, forecast }) => (
              <tr
                onClick={() => setCityForChart({ city, forecast })}
                key={city}
                className='nth-odd grid grid-cols-4 cursor-pointer'
              >
                <td className='flex justify-start items-center py-[9px] pl-4'>
                  {city}
                </td>
                <td className='flex justify-end items-center py-[9px] pr-4'>
                  {getMinMaxTemperature(
                    'max',
                    max,
                    forecast.hourly.temperature_2m
                  )}
                </td>
                <td className='flex justify-end items-center py-[9px] pr-4'>
                  {getMinMaxTemperature(
                    'min',
                    min,
                    forecast.hourly.temperature_2m
                  )}
                </td>
                <td className='flex justify-end items-center py-[9px] pr-4'>
                  {forecast.current_weather.winddirection}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
