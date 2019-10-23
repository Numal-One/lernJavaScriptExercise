let n = 20;
let start = Date.now();
console.log(fib(n));
console.log(Date.now() - start);

let start = Date.now();
console.log(fibFor(n));
console.log(Date.now() - start);

let start = Date.now();
console.log(fibRec(n));
console.log(Date.now() - start);

function fib(n) {
  return Math.round( ((1+(5)**(0.5))/2)**n/((5)**(0.5)) );
}

function fibFor(n) {
  let n1 = 1;
  let n2 = 0;
  let fn = 0;
  let i = 2;
  if (n === 0) return 0;
  if (n === 1) return 1;
  while (i <= n) {
    fn = n1 + n2;
    n2 = n1;
    n1 = fn;
    i++;
  }
  return fn;
}

function fibRec(n) {
  if (n === 1) return 1;
  if (n === 2) return 1;
  return fibRec(n-1) + fibRec(n-2);
}