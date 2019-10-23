let n = 10;
console.log(sumToRec (n));
console.log(sumToFor (n));
console.log(sumToExp (n));

function sumToRec(n) {
  if (n === 1) {
    return n;
  }
  return n + sumToRec(n-1);
}

function sumToFor(n) {
 let result = 0;
 for(let i = 1; i <= n; i++) {
   result += i;
 }
 return result;
}

function sumToExp(n) {
  return (1 + n)*n/2;
}