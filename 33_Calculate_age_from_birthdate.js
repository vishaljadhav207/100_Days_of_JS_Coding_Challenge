const CalculateAge = (birthdate) => {
    // 1. Get today's date and birthdate objects
    let todayDate = new Date();
    birthdate = new Date(birthdate);
  
    // 2. Calculate age in years
    let age = todayDate.getFullYear() - birthdate.getFullYear();
  
    // 3. Adjust age for birthdays not yet passed in current year
    let monthDiff = todayDate.getMonth() - birthdate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && todayDate.getDate() < birthdate.getDate())) {
      age--;
    }
  
    // 4. Return the calculated age
    return age;
  };
  
  console.log(CalculateAge("1990-05-15")); // Output: 34 (assuming today's date is after May 15th, 2024)
  