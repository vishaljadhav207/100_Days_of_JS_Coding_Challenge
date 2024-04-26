//25 Number Range generator

const NumberRange = (a, b) => {
  let arr = [];
  while (a <= b) {
    arr.push(a);
    a++;
  }
  return arr;
};

console.log(NumberRange(0, 5)); //output: [0,1,2,3,4,5]
