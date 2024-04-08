// //09 write a function that take thea number as input and returns the sum of its digits

const sumOfDigits = (num) => {
//   if (num == 0) {
//     return num;
//   }

//method 1
  let sum = 0;
  while (num != 0) {
    let rem = num % 10;
    sum = sum + rem;
    num = Math.floor(num / 10);
  }
  return sum;

//   //method 2
//   let arr=Array.from(String(num),Number);//convert into array
//   arr=arr.reduce((acc,currVal)=>acc=acc+currVal,0)
//   return arr
};

// //example of usage
console.log(sumOfDigits(1234)); //output :10