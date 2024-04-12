


//13 Calculate sum of square


const SumOfSquares = (arr) => {
  let ans = arr.reduce((acc, curr) => (acc = acc + curr * curr));
  return ans;
};

console.log(SumOfSquares([1, 2, 3])); //output : 14
