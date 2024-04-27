//26  Number Range generator using recursion
const NumberRangeRescur = (a, b, arr = []) => {
  //Base Case
  if (a <= b) {
    arr.push(a);
    return NumberRangeRescur(a + 1, b, arr);
  }

  return arr;
};

console.log(NumberRangeRescur(0, 5)); //output: [0,1,2,3,4,5]
