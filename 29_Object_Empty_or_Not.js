//29 Object empty or not

const isEmptyObject = (obj) => {
//method 1
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       return `it's not empty`;
//     }
//   }
//   return `It's empty`;

//method 2
return Object.keys(obj).length===0;
};

console.log(isEmptyObject({}));//output: It's empty
console.log(isEmptyObject({ name: "vishal" }));//output: it's not empty
console.log(isEmptyObject({ keyWithNull: undefined }));//output: it's not empty
