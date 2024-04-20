//20 occurence of element in the array

const numbers = [1, 2, 2, 2, 3, 4, 5];
let counts = {};

for (let element of numbers) {
  counts[element] = (counts[element] || 0) + 1;
}

console.log(counts); //output: { '1': 1, '2': 3, '3': 1, '4': 1, '5': 1 }
