let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr1 = [ vasya, petya, masha ];

console.log(getAverageAge(arr1));

function getAverageAge(arr) {
  return arr.reduce(function(sum, item, index) {
    if (index === arr.length - 1) {
      return (sum + item.age)/arr.length;
    }
    return sum + item.age;
  },0);
 
}