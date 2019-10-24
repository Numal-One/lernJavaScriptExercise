let users = [
  { name: "A", age: 20, surname: "B" },
  { name: "B", age: 18, surname: "C" },
  { name: "C", age: 19, surname: "A" }
];

function byField(field) {
  return function(a,b) {
    return a[field] > b[field] ? 1 : -1
  }
}

console.log(users[1]['name']);
console.log (users.sort(byField('name')));
// console.log (users.sort(byField('age')));
// console.log (users.sort(byField('surname')));