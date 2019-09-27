alert(readNumber());

function readNumber () {
do {
    let a = prompt('Введите число','');
    if (a === null) {
        alert('Отменено');
        return null;
    } else if (+a){
        return +a;
    }
} while (true);
}