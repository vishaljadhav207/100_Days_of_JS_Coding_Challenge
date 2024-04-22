//21 function findmode that takes an array of number as input and return the mode of the array (the number that appears most freaquency)

const FindMode = (arr) => {
  let counts = {};
  let maxNum = 0;
  let Mode;

  for (let element of arr) {
    counts[element] = (counts[element] || 0) + 1;
    if (counts[element] > maxNum) {
      maxNum = counts[element];
      Mode = element;
    }
  }
  console.log(counts); //{ '1': 2, '2': 3, '3': 1, '4': 1 }
  return Mode;
};

console.log(FindMode([1, 2, 2, 3, 1, 4, 2])); //output : 2
