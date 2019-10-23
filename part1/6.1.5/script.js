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
console.log(`Время: ${Date.now() - start} ms`);

console.log('-----------------------');
start = Date.now();
console.log('Цикл:');
printListF(list);
console.log(`Время: ${Date.now() - start} ms`);

function printListR(l) {
  if (l.next !== null) {
    printListR(l.next);
  }
  console.log(`val - ${l.value}`);
}


function printListF(l) {
  let resultArr = [];
 while (l !== null) {
  resultArr.push(l.value);
  l = l.next;
 }
 console.log(...resultArr);
}