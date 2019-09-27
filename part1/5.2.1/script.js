let a = 0;
let b = 0;

while (true) {
    a = +prompt('Введите первое число');
    if (isNaN(a)) {
        alert('Введено не число. Еще раз');
        continue;
    }
    break;
}

while (true) {
    b = +prompt('Введите второе число');
    if (isNaN(b)) {
        alert('Введено не число. Еще раз');
        continue;
    }
    break;
}

alert (`сумма = ${a + b}`);