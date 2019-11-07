function f(a, b) {
  console.log( a + b );
}

Function.prototype.defer = function(delay) {
  return (...args) => {
    setTimeout(()=>{
      this(...args);
    }, delay);
  }
}

console.log("start");
f.defer(1000)(1, 2); 
f.defer(1000)(11, 2); 