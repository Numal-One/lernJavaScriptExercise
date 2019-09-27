let mi = 1;
let ma = 122;
console.log(random(mi,ma));
console.log(random(mi,ma));
console.log(random(mi,ma));
console.log(random(mi,ma));
console.log(random(mi,ma));
console.log(random(mi,ma));
console.log(random(mi,ma));
console.log(random(mi,ma));

function random(min, max){
    return Math.floor(Math.random()*(max + 1 - min) + min);
}
