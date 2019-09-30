let inputArr = [1,3,4,7,34,56,1,54,24,445,12,11111];
let outputArr = filterRange(inputArr,3,50);
console.log(inputArr);
console.log(outputArr);

function filterRange(arr, a, b) {
    let resultArr = arr.filter(item => item <= b && item >= a);
    return resultArr;
}