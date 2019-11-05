function f() {
  console.log("Hello!");
}

Function.prototype.defer = function(delay) {
  let fn = this;
  setTimeout(fn, delay);
}

console.log('start');
f.defer(1000); 