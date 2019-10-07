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



function deepEqual(a, b) {
    //создаем 2 маccива ключей объектов
    let aKeys = Object.getOwnPropertyNames(a);
    let bKeys = Object.getOwnPropertyNames(b);

    // проверяем кол-во элементов в этих массивах, если разное, то не одинаковые
    if (!(aKeys.length === bKeys.length)) {
        console.log('разное кол-во ключей в объекте');
        return false;
    }
    let objLength = (aKeys.length);
    //переменные для сравнения ключей и значений
    let equalKey = false;
    let equalVal = false;

    for (let i = 0; i < objLength; i++) {
        equalKey = false;
        equalVal = false;
        
        //сравниваем ключи
        if (aKeys[i] === bKeys[i]) {
            equalKey = true;
        } else {
            return false;
        }

        //находим значения ключей
        let aVal = a[`${aKeys[i]}`];
        let bVal = b[`${bKeys[i]}`];

        //сравниваем значения
        //на начальном этапе нужно понять, являются ли ключи объектами
        //если да, то вызываем рекурсивно функцию сравнения объектов
        if ((typeof aVal === 'object') && (typeof bVal === 'object')){
            equalVal = deepEqual(aVal, bVal);
        
        } else {
            equalVal = (aVal === bVal);// если нет, то просто сравниваем значения
        }

        if (!(equalKey && equalVal)) {
            return false; // итог выполнения итерации. равны ли пары "ключ:значение"
        }

    }
    return (equalKey && equalVal);
}

console.log(`результат сравнения объектов a===b - ${deepEqual(aObj, bObj)}`);
console.log(`результат сравнения объектов c===d - ${deepEqual(cObj, dObj)}`);
console.log(`результат сравнения объектов e===f - ${deepEqual(eObj, fObj)}`);
console.log(`результат сравнения объектов g===h - ${deepEqual(gObj, hObj)}`);
