//40 Email validation using regex
//^[a-zA-z\d]+: Starts with one or more alphanumeric characters.
//(?:[.%_+][a-zA-z\d]+)*: Allows optional sequences of ., %, _, or + followed by alphanumeric characters.
//Domain: The part after the @ but before the top-level domain.[a-zA-z\d]+
//TLD :\.[a-zA-z\d]{2,}$

const ValidateEmail = (email) => {
  const regex =
    /^[a-zA-z\d]+(?:[.%_+][a-zA-z\d]+)*@[a-zA-z\d]+\.[a-zA-z\d]{2,}$/;
  const result = regex.test(email);
  return result;
};

console.log(ValidateEmail("Vishal123@gmail.com")); //true
console.log(ValidateEmail("Vis..123@gmail.com")); //false
console.log(ValidateEmail("Vishal123@gmail")); //false
// ## Email validation
// 1.local part : the part before @ symbol
// 2.domain : the part after @ but the top level domain
// 3.top level domain : the last part following the last dot
