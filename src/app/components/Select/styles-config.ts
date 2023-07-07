import { StylesConfig } from 'react-select';

export const selectStyles: StylesConfig = {
  control: (_, { isFocused }) => ({
    display: 'flex',
    height: '40px',
    width: '160px',
    borderRadius: '12px',
    backgroundColor: '#313131',
    border: `1px solid ${isFocused ? '#B3FC4F' : '#515151'}`,
    ':hover': {
      cursor: 'pointer',
    },
  }),
  placeholder: (base) => ({
    ...base,
    fontSize: '14px',
    color: '#a4a4a4',
    alignContent: 'center',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: '14px',
    fontWeight: '500',
    letterSpacing: '0.14px',
    color: '#fdfcff',
    backgroundColor: state.isSelected ? '#515151' : '#313131',
    borderRadius: '12px',
    margin: '4px',
    ':hover': {
      backgroundColor: '#515151',
      cursor: 'pointer',
    },
    width: 'content-fit',
    border: '1px solid #515151',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#313131',
    borderRadius: '12px',
  }),
};
