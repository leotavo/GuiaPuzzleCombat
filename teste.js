function calculateDaysBetweenDates(begin, end) {
  const beginDate = new Date(begin);
  const endDate = new Date(end);
  const difference = endDate - beginDate;
  const days = difference / (1000 * 60 * 60 * 24);
  return days;
}