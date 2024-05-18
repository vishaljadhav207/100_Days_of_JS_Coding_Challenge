const validateCreditCard = (str) => {
  //39 Validate credit card = Luhn Algorithm Steps:
  
  // Step 0: Initial step - remove non-digit characters
  str = str.replace(/\D/g, "");

  // Step 1: Reverse the digits of the number
  let revstr = str.split("").reverse();

  // Step 2: Double every second digit
  let doublenum = revstr.map((currdigit, index) => {
    currdigit = parseInt(currdigit); // Ensure the digit is a number
    if (index % 2 !== 0) {
      currdigit = currdigit * 2;
      // Step 3: Subtract 9 from numbers higher than 9
      if (currdigit > 9) {
        currdigit = currdigit - 9;
      }
    }
    return currdigit;
  });

  // Step 4: Sum all the digits
  const sum = doublenum.reduce((acc, currdigit) => acc + currdigit, 0);

  // Step 5: Check modulo 10
  return sum % 10 === 0;
};

console.log(validateCreditCard("4539 1488 0343 6467")); // should return true or false
