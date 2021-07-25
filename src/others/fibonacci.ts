export function fibonacciIterative(n: number) {
  if (n < 1) return 0;
  if (n <= 2) return 1;
  let fibNMinus2 = 0;
  let fibNMinus1 = 1;
  let fibN = n;
  for (let i = 2; i <= n; i++) { // n >= 2
    // n >= 2
    fibN = fibNMinus1 + fibNMinus2; // f(n-1) + f(n-2)
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = fibN;    
  }
  return fibN;
}

export function fibonacci(n: number) {
  if (n < 1) return 0;
  if (n <= 2) return 1;
  
  const result1 = fibonacci(n - 1);
  const result2 = fibonacci(n - 2);

  console.log(`Number: ${n} returns ${result1} + ${result2} = ${result1+result2}`);
  return result1 + result2;  
}
