//11 Count vowels in a string

const CountVowles=(str)=>{
    let vowels=['a','e','i','o','u']

    str=str.split('');

    let count=0;
    for(let char of str){
        if(vowels.includes(char.toLowerCase())){
            count++;
        }
    }
    return count;
}

console.log(CountVowles("Hellooo World"))  //output: 5
console.log(CountVowles("The quIck BrOwn fOx"));//output: 5