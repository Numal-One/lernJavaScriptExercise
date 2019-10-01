
let min = 2;
let max = 10;
let result = '';

console.log (`min - ${min}, max - ${max}`);

//если минимальное больше максимального, то поменять значения местами
if (min > max) {
    min = min + max - (max = min);
    console.log (`reverse: min - ${min}, max - ${max}`);
}


for (let i = min; i <= max; i++) {

    if (i == 2) console.log (i); // проверка на двойку. выносим из цикла

    for(let j = 2; j < i; j++ ) {
        // если есть остаток от деления, то продолжаем проверять иначе выходим из цикла
        if (i%j) {
            result = `${i}`;
            continue;
        } else {
            result = ``;
            break;
        }
       
    }
    if (result) console.log(result);
}