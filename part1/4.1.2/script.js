// несколько реализаций функций проверки пустого массива

// через перебор объекта. если хотя бы одна итерация перебора
// состоялась, то объект не пустой
// вроде все хорошо, пока через дескриптор поменять атрибут enumerable: false

function isEmpty1(obj) {
  let objEmpty = true;
  for (let key in obj) {
    objEmpty = false;
  }
  return objEmpty;
}

//получаем массив ВСЕХ свойств объекта - видимо, то, что нужно
function isEmpty2(obj) {
  let keysArr = (Object.getOwnPropertyNames(obj));
  return (keysArr.length) ? false : true;
}

// получаем массив со всеми собственными именами 
// ПЕРЕЧИСЛЯЕМЫХ свойств объекта. опять не подходит.
function isEmpty3(obj) {
  let keysArr = (Object.keys(obj));
  return (keysArr.length) ? false : true;
}






let Obj1 = {}; // создаем пустой объект



console.log( `пустой объект (fn1) - ${isEmpty1(Obj1)}` ); // true
console.log( `пустой объект (fn2) - ${isEmpty2(Obj1)}` ); // true
console.log( `пустой объект (fn3) - ${isEmpty3(Obj1)}` ); // true


Obj1["8:30"] = "get up";

console.log('-----------------------------------------------')
console.log(  `не пустой объект (fn1) - ${isEmpty1(Obj1)}` ); // false
console.log(  `не пустой объект (fn2) - ${isEmpty2(Obj1)}` ); // false
console.log(  `не пустой объект (fn3) - ${isEmpty3(Obj1)}` ); // false


Object.defineProperty(Obj1, "8:30", {
  enumerable: false,
});

console.log('-----------------------------------------------')
console.log( `не пустой с неперечисляемым свойством (fn1) - ${isEmpty1(Obj1)}` )
console.log( `не пустой с неперечисляемым свойством (fn2) - ${isEmpty2(Obj1)}` )
console.log( `не пустой с неперечисляемым свойством (fn3) - ${isEmpty3(Obj1)}` )
