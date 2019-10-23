let n = 115;

let start = Date.now();
console.log(factorial(n));
console.log(`${Date.now() - start} ms`);

function factorial(n) {
  if (n === 1) return n;
  return n * factorial(n - 1);
}