'use client';

import React from 'react';
import Select from 'react-select';

import { SelectHandlerProps, SelectOptionType } from '../Weatherboard/types';
import { selectStyles } from './styles-config';

const CustomSelect: React.FC<{
  selectData: OptionType[];
  placeholder: string;
  handleSelect: (options: SelectHandlerProps) => void;
}> = ({ selectData, placeholder, handleSelect }) => {
  const handleChange = (selectedOption: SelectOptionType) => {
    if (Array.isArray(selectedOption)) return handleSelect(selectedOption);

    handleSelect(+selectedOption?.value);
  };

  return (
    <Select
      className='md:w-[160px]'
      isMulti={placeholder === 'Country'}
      placeholder={placeholder}
      hideSelectedOptions={false}
      isClearable={false}
      closeMenuOnSelect={false}
      controlShouldRenderValue={false}
      // @ts-ignore
      onChange={handleChange}
      options={selectData}
      styles={selectStyles}
    />
  );
};

export default CustomSelect;
