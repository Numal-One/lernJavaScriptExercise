let mi = 1;
let ma = 12;
console.log(random(mi,ma));

function random(min, max){
    return Math.random()*(max - min) + min;
}
