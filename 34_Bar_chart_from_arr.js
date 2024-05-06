//34 simple chart from the array
// const generateBarChart = (arr) => {
//     //method 1
//   const newArr = arr.map((currele, index) => {
//     let star = "";
//     let number = 0;
//     while (number < currele) {
//       star = star + "*";
//       number++;
//     }
//     return `${index + 1}: ${star}`;
//   });
//   return newArr.join("\n");
// };

//method 2
const generateBarChart = (arr) => {
  return arr
    .map((currElem, index) => {
      return `${index + 1}:${"*".repeat(currElem)}`;
    })
    .join("\n");
};
console.log(generateBarChart([5, 3, 9, 2]));
//output:-
// 1: *****
// 2: ***
// 3: *********
// 4: **
