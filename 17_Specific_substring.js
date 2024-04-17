//17 write a function to check if a given string with a specific substring

//Method ( 1 Built in )
// const startsWith = (str, substr) => {
//   str = str.toLowerCase();
//   str = str.startsWith(substr);
//   return str;
// };

//Method (2 using slice)
const startsWith = (str, substr) => {
  str = str.toLowerCase();
  str = str.slice(0, substr.length) === substr;
  return str;
};

console.log(startsWith("Hello world", "hello"));
console.log(startsWith("Hello world", "World"));
