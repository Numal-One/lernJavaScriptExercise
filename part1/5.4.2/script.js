let styles = ['Джаз','Блюз'];
styles.push('Рок-н-ролл');
console.log(styles);

let arrMidle = Math.floor((styles.length - 1)/2);
console.log(`всего в массиве ${styles.length}, позиция середины массива - ${arrMidle}`);

styles.splice(arrMidle,1,"Классика");
console.log(styles);

console.log(`first elem in array - ${styles.shift()}`);
console.log(`array - ${styles}`);

styles.unshift('Рэп','Регги');
console.log(`array - ${styles}`);