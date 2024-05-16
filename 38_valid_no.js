//38 valid indian mobile number
//it must starts with the number 6,7,8,9

const ValidateMobileNumber = (number) => {
  const regex = /^[6-9][0-9]{9}$/.test(number);
  return regex;
};

console.log(ValidateMobileNumber("9234567890")); //output: true
console.log(ValidateMobileNumber("4234567890")); //output: false - not starting with 6-7-8-9
