
console.log (sum(2)(3));

function sum(a) {
  return function (b) {
    return a+b;
  }
}