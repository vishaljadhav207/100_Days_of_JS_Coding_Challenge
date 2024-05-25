// 43 Date validation
const isValidDate = (dateformat) => {
  return /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/((19|20)\d{2})$/.test(
    dateformat
  );
};

console.log(isValidDate("12/15/2021"));
