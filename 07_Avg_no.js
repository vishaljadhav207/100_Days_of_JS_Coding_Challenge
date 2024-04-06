// Challenge: 07 Calculate the Average
// Write a function called calculate Average that takes an
// array of numbers as input and returns the average of those
// numbers.
// Your function should:
// Accept an array of numbers as input.
// Calculate the sum of all the numbers in the array.
// Divide the sum by the total number of elements in the
// array to find the average.
// Return the calculated average.

const calculateAverage = (arr) => {
  let total = arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  console.log(total);
  return total / arr.length;
};

// Example usage:
console.log(calculateAverage([5, 10, 2, 8])); // Output: 6.
