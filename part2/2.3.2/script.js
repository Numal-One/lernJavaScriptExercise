for (let li of tree.querySelectorAll('li')) {
  let span = document.createElement('span');
  li.prepend(span);
  span.append(span.nextSibling); // поместить текстовый узел внутрь элемента <span>
}

let ul = document.querySelector('.tree');

// обработчик по сворачиванию и разворачиванию дерева
ul.addEventListener('click',function({target}){
  if  (!target.matches('span')) {
    console.log('return');
   return;
  }
  let ul = target.nextSibling;
  if (ul.matches('ul')) {
   ul.hidden = (ul.hidden) ? false : true;
  }
});

