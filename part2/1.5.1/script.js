let liCollection = document.querySelectorAll('li');
let counter =0;
for (let elem of liCollection ) {
   console.dir(elem.firstChild.data);
   counter++;
}
console.log(counter);