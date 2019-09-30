let inputStr1 = "-webkit-transition";
let inputStr2 = "list-style-image";
let inputStr3 = "background-color";
console.log(camelize(inputStr1));
console.log(camelize(inputStr2));
console.log(camelize(inputStr3));

function camelize(str){
 str = str.split('-');
 str = str.map((item,index) => {
   if (index != 0) {
     return item.slice(0,1).toUpperCase() + item.slice(1)
    } else {
      return item;
    }
  });
 return str.join('');
}