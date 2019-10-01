let inputArr = ["HTML", "JavaScript", "CSS"];
console.log(`sorted - ${copySorted(inputArr)}`);
console.log(`old array - ${inputArr}`);

function copySorted(arr){
    return arr.slice().sort();
}