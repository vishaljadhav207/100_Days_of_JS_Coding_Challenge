//24 write a function called truncateString that takes two parameters

const TruncateStr = (str, count) => {
  //M-1
  //   if (count <= 0) {
  //     return str;
  //   } else if (str.length > count) {
  //     return str.slice(0, count).concat("...");
  //   }

  //M-2-using Ternary operator
  return count <= 0 ? str : str.slice(0, count).concat("...");
};

console.log(TruncateStr("A-Tisket a-tasket A green and yellow basket", 8));
//output: A-Tisket...
