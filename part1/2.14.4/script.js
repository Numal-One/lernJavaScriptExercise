let a = 9;
let b = 3;

console.log(pow(a,b));

function pow(x,n) {
  if (n < 1 || (Math.floor(n) != n)) {
    return "Неверно задана степень";
  } 
  
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}