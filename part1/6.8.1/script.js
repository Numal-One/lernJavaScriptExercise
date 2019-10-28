// let i = 0;
// let timeId1 = setInterval(function(){
//   if (i > 10) {
//     clearInterval(itmeId1);
//   }
//   console.log(`i - ${i}`);
//   i++;
// }, 500);

let a = 3;
let b = 10;

let tick = function fn(a,b) {
  if (a > b) {
    return;
  }
  console.log(a);
  a++;
  setTimeout(fn,500,a,b);
}

setTimeout(tick,500,a,b);


