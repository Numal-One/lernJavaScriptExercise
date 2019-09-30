alert(sumInput());

function sumInput() {
    let arr = [];
    
    while (true) {
        let strNumber = prompt('введите число','');
        if (strNumber === '' || strNumber === null) {
            break;
        }
        if (isNaN(Number(strNumber))) {
            alert('Введено не число. Еще раз');
            continue;
        }

        arr.push(Number(strNumber));
        
    }
    let sum = 0;
    for (let item of arr) {
        sum += item;
    }
    return sum;
}