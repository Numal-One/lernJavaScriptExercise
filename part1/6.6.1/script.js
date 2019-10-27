function makeCounter() {
  let count = 0;
  function counter(){
    count++;
    return count;
  }
  counter.set = function (value) {
    if(value) {
      count = value;
    }
    return count;
  }

  counter.decrease = function() {
    count--;
    return count;
  }
  return counter;
}

let counterFn = makeCounter();

console.log(counterFn());
console.log(counterFn());
console.log(counterFn());
console.log(counterFn());
console.log(counterFn());
console.log(counterFn.set(15));
console.log(counterFn.decrease());
console.log(counterFn.decrease());
console.log(counterFn.decrease());
console.log(counterFn.decrease());