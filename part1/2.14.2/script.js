
let userAge = +prompt('Сколько лет?','');
console.log(userAge);

alert(checkAge1(userAge));11
alert(checkAge2(userAge));11

function checkAge1 (age) {
  return (age > 18) ? true :  confirm('Родители разрешили?');
}

function checkAge2 (age) {
  return (age > 18) || confirm('Родители разрешили?');
}
