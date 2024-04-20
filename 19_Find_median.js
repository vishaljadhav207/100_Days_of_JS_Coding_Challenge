//19 find median of the array

const Findmedian = (arr) => {
  //step 1:Sort arr
  arr.sort((a, b) => a - b);
  //step 2 :check length odd or even
  let length = arr.length;
  let mid = Math.floor(length / 2);
  if (length % 2 === 0) {
    //step 3:for even length array
    return (arr[mid] + arr[mid - 1]) / 2;
  } else {
    //step 4:for odd length array
    return arr[mid];
  }
};

console.log(Findmedian([1, 2, 3, 4, 5, 6])); //op ->3.5
console.log(Findmedian([1, 3, 5, 7, 9, 11])); //op ->6 i.e (5+7)/2=6
