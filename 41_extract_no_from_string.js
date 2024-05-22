//41 Extract no from string
//#REGEX

const ExtractNum = (str) => {
  const regex = /[\d]+/g;
  return str.match(regex).join();
};

console.log(ExtractNum("abc123def456")); //output :123,456
console.log(ExtractNum("1b2c3d")); //output :1,2,3
//\d :matches any digit(0-9)
//+ :matches one or more of the preceding token(i.e, digits).
//g :global flag/to find all matches in the string
