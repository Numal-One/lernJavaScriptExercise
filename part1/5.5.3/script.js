let inputArr = [5, 3, 8, 1];
filterRangeInPlace(inputArr,2,3);
console.log(inputArr);


function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i,1);
        }
    }
}