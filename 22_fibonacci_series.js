//22 Fibonacci Number

const fibonacci = (n) => {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  };
  
  const n = 5; // Change n to any index you want to find the Fibonacci number for
  console.log("Fibonacci number at index", n, "is", fibonacci(n));
  