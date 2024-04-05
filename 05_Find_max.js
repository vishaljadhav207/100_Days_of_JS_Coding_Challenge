//Q.05 Write a function findMax that takes an array of numbers
//as input and returns the maximum number in the array.

const findMax = (arr) => {
  return Math.max(...arr); //spread operator spread the values -converted into numbers
  //return Math.max(arr)//op Shows NaN because Math.max only takes values not arrays
};

// Example usage:
console.log("Max No: " + findMax([1, 5, 3, 9, 2])); // Output: 9
console.log("Max No: " + findMax([-10, -5, -3, -9, -2])); // Output: -2
console.log("Max No: " + findMax([5])); // Output: 5
