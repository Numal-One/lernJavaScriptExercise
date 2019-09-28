let inputStr = 'list-style-image';
console.log(camelize(inputStr));

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