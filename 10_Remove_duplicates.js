//10_Remove duplicates in array and return new array with the unique elements

const RemoveDuplicateds = (arr) => {
  let uniqueArr = [...new Set(arr)];
  return uniqueArr;
};

console.log(RemoveDuplicateds([1, 2, 3, 3, 3, 4, 5, 6, 7, 7, 9]));
//The new Set() method in javascript creates a new Set object.
//A set objedt is a collection of unique values.It can store any type of value,
//whether primitive values or object reference
