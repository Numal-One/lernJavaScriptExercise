let str1 = 'собакА';

console.log(ucFirst(str1));

function ucFirst(str) {
    return (str.slice(0,1).toUpperCase() + str.slice(1) );
}