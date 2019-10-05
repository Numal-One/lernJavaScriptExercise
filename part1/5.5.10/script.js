let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];



console.log(shuffle(arr1));
console.log(shuffle(arr1));
console.log(shuffle(arr1));
console.log(shuffle(arr1));
console.log(shuffle(arr1));
console.log(shuffle(arr1));
console.log(shuffle(arr1));
console.log(shuffle(arr1));
console.log(shuffle(arr1));
console.log(shuffle(arr1));
console.log(shuffle(arr1));

function shuffle(arr){
  arr.sort((a,b) =>  (Math.random() - 0.5));
  return arr;
}
