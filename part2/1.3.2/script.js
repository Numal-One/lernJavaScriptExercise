

let rows = document.body.firstElementChild.firstElementChild.children;
let count = 0;
for (let elem of  rows) {
  elem.children[count++].style.background = 'red';
}


