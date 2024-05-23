//42  Validate hex color code

const ValidateHexColor = (hex) => {
  const regex = /^#([A-Fa-f\d]{3}|[A-Fa-f\d]{6})$/;
  const result = regex.test(hex);
  return result;
};
console.log(ValidateHexColor("#fff")); //output :true
console.log(ValidateHexColor("#a3c113")); //output :true
console.log(ValidateHexColor("#1234567")); //output :false
console.log(ValidateHexColor("a3c11")); //output :false
