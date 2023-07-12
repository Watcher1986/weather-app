export const getTemperatureRange = () => {
  const numbers = [];
  for (let i = -80; i <= 80; i++) {
    numbers.push({
      value: i.toString(),
      label: i.toString(),
    });
  }

  return numbers;
};
