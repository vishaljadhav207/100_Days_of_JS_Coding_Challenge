//5 sorting in ascending order
const sortAscending=(arr)=>{

arr=arr.sort((a,b)=>a-b)
return arr
}

// Example usage:
console.log(sortAscending([5, 3, 1, 8])); // Output: [1, 3, 5, 8]
//console.log(sortAscending([5, 3, 10, 8])); // Output: [3, 5, 8,10]


//todo Requirements:
//? The function should take an array of numbers as input.
//? It should return a new array with the numbers sorted in ascending order.
//? The original array should remain unchanged.--no use of for loop 
//? You are not· allowed to use·the· built-in·sort() method.|