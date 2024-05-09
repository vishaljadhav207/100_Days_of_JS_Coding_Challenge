//35 simple currencu converter

const rates = {
  USD: 1,
  EUR: 0.9, //(Euro)
  GBP: 0.8, // (British Pound)
  INR: 82,
};
//first convet amount in usd
const convertCurrency = (amount, fromCurrency, toCurrency) => {
  let amountinUSD = 0;
  //  if fromCurrency is not USD, it divides the amount by the exchange rate for fromCurrency from the rates object.
  if (fromCurrency !== "USD") {
    amountinUSD = amount / rates[fromCurrency];
  } else {
    amountinUSD = amount;
  }
  //   If toCurrency is not USD, it multiplies amountinUSD
  let convertAmount = 0;
  if (toCurrency !== "USD") {
    convertAmount = amountinUSD * rates[toCurrency];
  } else {
    convertAmount = amountinUSD;
  }
  return convertAmount;
};

console.log(convertCurrency(100, "GBP", "EUR"));
// amount: 100 (100 GBP)
// fromCurrency: "GBP" (British Pound)
// toCurrency: "EUR" (Euro)
// It converts 100 GBP to EUR based on the exchange rates defined in the rates object. The result is then logged to the console.
