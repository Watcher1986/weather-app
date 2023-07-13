function getWeekDaysOrder() {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const currentDayIndex = new Date().getDay();

  const rightOffset = [...days].splice(0, currentDayIndex + 1);
  const leftOffset = days.slice(currentDayIndex + 1);

  return [...leftOffset, ...rightOffset];
}

export { getWeekDaysOrder };
