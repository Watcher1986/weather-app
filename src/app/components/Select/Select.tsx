import React, { useState } from 'react';
import Select, { OnChangeValue } from 'react-select';

import { selectStyles } from './styles-config';

interface OptionType {
  value: string;
  label: string;
}

const options: OptionType[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const CustomSelect: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<readonly OptionType[]>(
    []
  );

  const handleChange = (selectedOption: OnChangeValue<OptionType, true>) => {
    setSelectedOptions(selectedOption);
  };

  return (
    <Select
      isMulti
      placeholder='Country'
      value={selectedOptions}
      hideSelectedOptions={false}
      isClearable={false}
      closeMenuOnSelect={false}
      controlShouldRenderValue={false}
      // @ts-ignore
      onChange={handleChange}
      options={options}
      styles={selectStyles}
    />
  );
};

export default CustomSelect;
