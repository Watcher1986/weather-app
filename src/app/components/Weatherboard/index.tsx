import { useCallback, useMemo, useState } from 'react';
import { useSelector } from '@/store/hooks/reduxHooks';

import CustomSelect from '../Select/Select';
import Table from './Table';

import { getTemperatureRange } from '@/helpers/getTemperatureRange';
import { countries } from '../../../../public/mockdata/countries';
import { SelectHandlerProps } from './types';

function Weatherboard() {
  const { weather } = useSelector((state) => state.weather);
  const [selectedCountries, setSelectedCountries] = useState<string[] | []>([]);
  const [minTemperature, setMinTemperature] = useState<number | undefined>();
  const [maxTemperature, setMaxTemperature] = useState<number | undefined>();

  const handleSelectCountry = useCallback((options: SelectHandlerProps) => {
    if (typeof options === 'object') {
      const countriesList = options?.map((option) => option.value) as
        | string[]
        | [];
      setSelectedCountries(countriesList);
    }
  }, []);

  const handleSelectMinTemperature = useCallback(
    (value: SelectHandlerProps) => {
      if (typeof value === 'number') setMinTemperature(value);
    },
    []
  );
  const handleSelectMaxTemperature = useCallback(
    (value: SelectHandlerProps) => {
      if (typeof value === 'number') setMaxTemperature(value);
    },
    []
  );

  const minMaxTemperatureRange = useMemo(() => getTemperatureRange(), []);

  const tableData = useMemo(() => {
    if (!selectedCountries.length) return weather;

    return weather.filter(({ country }) =>
      selectedCountries?.some((item) => item === country)
    );
  }, [selectedCountries, weather]);

  return (
    <section className='flex flex-col h-[432px] px-4 pb-[18px] pt-[24px] bg-[#1a1a1a] rounded-2xl min-[1224px]:w-[641px]'>
      <div className='flex flex-row gap-3 pb-[22px]'>
        <CustomSelect
          placeholder='Country'
          selectData={countries}
          handleSelect={handleSelectCountry}
        />
        <CustomSelect
          placeholder='min'
          selectData={minMaxTemperatureRange}
          handleSelect={handleSelectMinTemperature}
        />
        <CustomSelect
          placeholder='max'
          selectData={minMaxTemperatureRange}
          handleSelect={handleSelectMaxTemperature}
        />
      </div>
      <Table
        weatherData={tableData}
        min={minTemperature}
        max={maxTemperature}
      />
    </section>
  );
}

export default Weatherboard;
