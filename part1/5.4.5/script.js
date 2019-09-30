console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([]));


function getMaxSubSum(arr) {
   
    // удаляем отрицательные или нулевые элементы по краям массива
    while (true) {
        if (arr[0] <= 0) {
            arr.shift();
            continue;
        }
        if (arr[arr.length -1] <= 0) {
            arr.pop();
            continue;
        }
        break;
    }
    
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        
        for (let j = i+1; j <= arr.length; j++ ) {
            
            let currentArr = arr.slice(i,j);
            let currentSum = 0;
            for (let item of currentArr) {
                currentSum +=item;
            }
            
            sum = Math.max(sum, currentSum);
        }
    }

    return sum;



}