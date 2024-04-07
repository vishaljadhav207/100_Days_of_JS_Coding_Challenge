// 08 Write a function arraysAreEqual that takes two arrays
// arr1 and arr2 as input and returns true if the arrays are
// equal (i.e., contain the same elements in the same order),
// and false otherwise.

const arraysAreEqual = (arr1, arr2) => {
  let s1 = arr1.length;
  let s2 = arr2.length;

  if (s1 !== s2) {
    return false;
  }

  return arr1.every((currval, index) => currval === arr2[index]);//default index start wit the 0
};

// Example usage: any
console.log(arraysAreEqual([1, 2, 3], [1, 2, 3]));//Output: true
console.log(arraysAreEqual([1, 2, 3], [1, 2, 4])); // Output: false
console.log(arraysAreEqual([], [])); // Output: true

// The function should return false if the arrays have different length
