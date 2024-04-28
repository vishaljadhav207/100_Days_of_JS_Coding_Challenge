//27 Simple password generator

const PasswordValidator = (password) => {
    let hasLowercase = false;
    let hasUppercase = false;
    let hasNumber = false;
    
    for (let char of password) {
      if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
        hasUppercase = true;
      } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
        hasLowercase = true;
      } else if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) {
        hasNumber = true;
      }
    }
  
    // Check if all required criteria are met
    return hasLowercase && hasUppercase && hasNumber;
  };
  
  // Example usage:
  console.log(PasswordValidator("asdfghjk")); // false
  console.log(PasswordValidator("Abcd123")); // true
  