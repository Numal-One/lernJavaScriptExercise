Реализовать функцию deepEqual(a, b) для сравнения объектов любой вложенности.

'use strict';

let a = {
  name: 'Misha',
  order: {
    price: 20
  },
};

let b = {
  name: 'Misha',
  order: {
    price: 20,
  }
};


console.log(a === b);


function deepEqual(a, b) {
  
}

deepEqual(a, b);