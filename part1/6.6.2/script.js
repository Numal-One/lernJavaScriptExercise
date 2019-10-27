function sum(a) {
  return function(b) {
    return a + b;
  }
}




function createSum() {
  let result = 0;
  let sum = function fn(x){
    result += x;
    return fn;
  }
  sum.toString = function(){
    return result;
  }


  return sum;
}

let sum1 = createSum();
console.log(sum1(1)(1)(1)(1)(1));
