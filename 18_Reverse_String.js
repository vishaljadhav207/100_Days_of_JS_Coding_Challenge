//18 Write a function to reverse a string without using any built in methods or libraries.
const reverseString = (str) => {
    let n = str.length;
    let str1 = "";
    for (let i = n - 1; i >= 0; i--) {
      str1 = str1 + str[i];
    }
    return str1;
//   return str.split("").reverse().join("");
};

console.log(reverseString("hello")); //output: olleh
