let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

console.log('до сортировки');
console.log (arr[0],arr[1],arr[2]);



sortByAge(arr);

function sortByAge(inputArr) {
  inputArr.sort(function(x,y) {
    return x.age - y.age;
  })
  return inputArr;
}

console.log('после сортировки');
console.log (arr[0],arr[1],arr[2]);
