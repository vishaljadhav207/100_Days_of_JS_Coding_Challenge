//31 Simple interest calculator
const calculateSimpleInterest = (p, r, t) => {
  let SI = (p * r * t) / 100;
  return SI;
};
console.log(calculateSimpleInterest(1000, 5, 3));
