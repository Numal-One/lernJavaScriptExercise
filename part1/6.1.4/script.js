let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

let start = Date.now();
console.log('Рекурсия:');
printListR(list);
console.log(`${Date.now() - start} ms`);

console.log('-----------------------');
start = Date.now();
console.log('Цикл:');
printListF(list);
console.log(`${Date.now() - start} ms`);

function printListR(l) {
console.log(`val - ${l.value}`);
if (l.next === null) return l.value;
return printListR(l.next);
}


function printListF(l) {
 while (l !== null) {
  console.log(`val - ${l.value}`);
  l = l.next;
 }
}