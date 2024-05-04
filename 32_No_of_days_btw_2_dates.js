//32 Number of days between two days

const calculateDaysBetweenDates = (d1, d2) => {
  let date1 = new Date(d1);
  let date2 = new Date(d2);
  let res = Math.abs(date2 - date1);
  return res / (24 * 60 * 60 * 1000);
};

console.log(calculateDaysBetweenDates("2024-01-01", "2024-01-31"));
