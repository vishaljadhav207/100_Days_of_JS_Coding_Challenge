const generateHash = (str) => {
  if (str.length > 280 || str.trim() === 0) {
    return false;
  }
  str = str.split(" "); //converted into array
  str = str.map(
    (curEle) =>
      //   curEle.replace(curEle[0], curEle[0].toUpperCase()));
      curEle.charAt(0).toUpperCase() + curEle.slice(1)
  ); //another method

  str = `#${str.join("")}`; //converted into string again

  return str;
};

console.log(generateHash("my name is vishal"));
// op-> #MyNameIsVishal
