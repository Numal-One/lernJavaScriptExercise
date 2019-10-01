let arr1 = [5, 2, 1, -10, 8];
let arr2 = [1, 3, 15, -4, -45];
let arr3 = [114, -200, -400, 35, 2, 12];

function sortArray(array) {
   return array.sort((a,b) => b - a);
}
console.log(sortArray(arr1));
console.log(sortArray(arr2));
console.log(sortArray(arr3));