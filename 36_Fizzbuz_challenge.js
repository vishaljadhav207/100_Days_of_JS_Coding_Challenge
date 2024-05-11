//36 Fizz buzz challenge
// 1.if i is divisible by both 3 and 5, include "FizzBuzz" in the Result
// 1.if i is divisible by only 3 , include "Fizz" in the Result
// 1.if i is divisible by only 5, include "Buzz" in the XPathResult
// 1.if i is divisible by both 3 and 5, include "FizzBuzz" in the Result
//Otherwise, Include the number i itself
const fizzbuzz = (start, end) => {
  let arr = [];
  for (let i = start; i <= end; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      arr.push("fizzbuzz");
    } else if (i % 3 == 0) {
      arr.push("fizz");
    } else if (i % 5 == 0) {
      arr.push("buzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
};

console.log(fizzbuzz(1, 15));
//output :-[
//     1,          2,
//     'buzz',     'fizz',
//     7,          8,
//     'fizz',     'buzz',
//     11,         'fizz',
//     13,         14,
//     'fizzbuzz'
//   ]
