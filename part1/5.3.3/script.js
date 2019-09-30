console.log(turncate('Однажды в студеную зимнюю пору',5));
console.log(turncate('Лошадка примерзла ногою к забору',10));
console.log(turncate('Лошадка брыкалась, лошадка лягалась',15));
console.log(turncate('Лошадка ушла, а нога то отсталась',20));


function turncate(str, maxlength) {
    if (str.length > maxlength) {
        let resultStr =  str.slice(0,maxlength - 3) + '...';
        console.log(resultStr.length);
        return resultStr;
    }
}