//28 Random hex code generator
//convert random number into hexadecimal string representation 

const randomColor = () => {
  return `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;
};

console.log(randomColor());//output format : #7ae888