// Challenge: 06 Factorial Finder
// Write a function factorial that takes a non-negative
// integer num as input and returns its factorial. The
// factorial of a non-negative integer n, denoted as n!, is
// the product of all positive integers less than or equal to
// n. The factorial of 0 is defined as 1.

const factorial = (num) => {
  if (num < 0) {
    return "Factorial is not defined for negative numbers";
  }
  if (num === 0) {
    return 1;
  }

  let fact = num * factorial(num - 1);
  return fact;
};

console.log(factorial(5)); // Output: 120
console.log(factorial(-3)); // Output: Factorial is not defined for negative numbers

// Here are some examples of factorial calculations:
// factorial(0) => 1
// factorial(1) => 1
// factorial(2) => 2
// factorial(3) => 6
// factorial(4) => 24
// factorial(5) => 120
// Your function should work for any non-negative integer
