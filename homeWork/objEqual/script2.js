
function deepEqual(a, b) {
  
// проверка на null т.к. type of null вернет 'object'
  if (a === null || b === null) {
    return (a === null && b === null) ? true : false;
  }

  // типы переменных
  let aType = typeof a;
  let bType = typeof b;


  // если типы не одинаковые, то возвращаем false
  if (!(aType === bType)) {
    return false;
  }

  // если тип не 'object' сравниваем переменные строгим сравнением
  if (!(aType === 'object')) {
    return (a === b) ? true : false;
  }

  // если все же тип объект, то сравниваем длинну масивов ключей
  let aKeys = Object.getOwnPropertyNames(a);
  let bKeys = Object.getOwnPropertyNames(b);
  
  // если они разыне, то return false
  if (!(aKeys.length === bKeys.length)) {
    return false;
  }

  // если они оба нулевые, то return true - оба объекта одинаково пусты
  if (aKeys.length === 0 && bKeys.length === 0) {
    return true;
  }

  // объявляем result, как результат сравнения
  let result = false;
  
  //перебираем объект. т.к. кол -во ключей одинаково, то какой
  // перебирать - без разницы
  for( let prop in a) {
    // если у значения очередного ключа тип 'object', то рекурсивно 
    // вызываем функцию сравнения объектов
    if ((typeof a[prop] === 'object') && (typeof b[prop] === 'object')) {
      result = deepEqual(a[prop], b[prop]);
    } else {
      // если не объект, то сравниваем строгим сравнением
      result = (a[prop] === b[prop]);
    }
    
    // в конце каждой итерации проверяем
    // не является ли result false
    if (!result) {
      return false;
    }
    }

    // возвращаем result
    return result;

  

}


let aObj = {
  name: 'Misha',
  order: {
    price: 20
  },
};

let bObj = {
name: 'Misha',
order: {
  price: 20,
}
};

let cObj = {
  name: 'Alex',
  age: '20',
  order: {
    price: 20
  },
};

let dObj = {
name: 'Misha',
order: {
  price: 20,
}
};

let eObj = {
  name: 'Misha',
  age: '20',
  order: {
    price: 20,
    goods: {
      vodka: 2,
      beer: 20
  }
  },
};

let fObj = {
name: 'Misha',
age: '20',
order: {
  price: 20,
  goods: {
      vodka: 2,
      beer: 20
  }
}
};

let gObj = {
  name: 'Misha',
  age: '20',
  order: {
    price: 20,
    goods: {
      vodka: 2,
      beer: 20
  }
  },
};

let hObj = {
name: 'Misha',
age: '20',
order: {
  price: 20,
  goods: {
      vodka: 2,
      beer: 30
  }
}
};

console.log(`результат сравнения объектов a===b - ${deepEqual(aObj, bObj)}`);
console.log(`результат сравнения объектов c===d - ${deepEqual(cObj, dObj)}`);
console.log(`результат сравнения объектов e===f - ${deepEqual(eObj, fObj)}`);
console.log(`результат сравнения объектов g===h - ${deepEqual(gObj, hObj)}`);