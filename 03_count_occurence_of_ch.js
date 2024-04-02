//3.count no of occurence of character in string
const countChar=(str1,str2)=>{

str1=str1.toLowerCase();
str2=str2.toLowerCase();
str1=str1.split("")

// console.log(str1);

totalCounts = str1.reduce(function (acc, curr) {
    if(curr==str2){
        acc++;
    }
    return acc;
  }, 0); //arg initial value arr[i]
  
  return totalCounts;
}
console.log(countChar("Mississippi", "I")); 
//output-->4