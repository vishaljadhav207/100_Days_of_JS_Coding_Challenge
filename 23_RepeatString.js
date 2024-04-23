//23 Write function called repeat string that takes two parameters

const RepeateString = (str, num) => {
  return num > 0 ? str.repeat(num) : str;
};

console.log(RepeateString("abc", 5)); //output :"abcabcabcabcabc"
