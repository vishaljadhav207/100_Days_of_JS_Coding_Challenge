//37 Validate password

// (?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}
const ValidatePassword = (password) => {
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/;
  return regex.test(password);
};

console.log(ValidatePassword("Pass123@")); //output :true
console.log(ValidatePassword("Password")); //output :false doesnt fullfill the regex
