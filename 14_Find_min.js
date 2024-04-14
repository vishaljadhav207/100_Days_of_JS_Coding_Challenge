//14 Find the minimum value in array

//method 1
const Findmin = (arr) => {
  arr = arr.sort((a, b) => {
    if (b > a) return -1;
  });
  return arr[0];
};

//method 2
// const Findmin = (arr) => {
//   return Math.min(...arr)
// };

console.log(Findmin([5, 4, 3, 2, 1])); //op->1
console.log(Findmin([-1, -2, 3, 4, 5])); //op->-2
