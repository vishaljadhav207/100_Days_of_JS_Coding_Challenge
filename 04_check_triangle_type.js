
//4 . Check type of triangle

const checkTriangleType=(a,b,c)=>{
  if(a==b && b===c){
    return "equilateral"
  }
  if(a===b || b===c ||  c===a){
    return "isosceles"
  }
  return "scalene"
}

console.log(checkTriangleType(3, 3, 3)); // Output: "equilateral"
console.log(checkTriangleType(3, 4, 3)); // Output: "isosceles"
console.log(checkTriangleType(5, 8, 6)); // Output: "scalene"

// todo The function should adhere to the following rules:
//? If all three sides are of equal length, return "equilateral".
//? If only two sides are of equal length, return "isosceles".
//? If all three sides have different lengths, return "scalene".