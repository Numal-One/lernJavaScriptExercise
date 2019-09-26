
let number = 1;

switch (number) {
  case 0:
    console.log ('Вы ввели число 0');
    break;
  case 1:
    console.log ('Вы ввели число 1');
    break;
  case 2:
  case 3:
    console.log ('Вы ввели число 2 или 3');
    break;
  default: 
    console.log('Введенное число не входит в указаный диапазон');
    break;
}