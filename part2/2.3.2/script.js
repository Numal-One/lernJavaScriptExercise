let ul = document.querySelector('.tree');

// обработчик по сворачиванию и разворачиванию дерева
ul.addEventListener('click',function(e){
  if  (e.target.tagName !== 'LI') {
   return;
  }
  if (e.target.firstElementChild !== null) {
    e.target.firstElementChild.hidden = (e.target.firstElementChild.hidden)? false : true;
  }
});


// обработчик для жирного текста под курсосром
ul.addEventListener('mouseover', function(e){
  if  (e.target.tagName !== 'LI' || e.target.style === null) {
    return;
   }
  e.target.style.fontWeight = 'bold';

  if (e.target.firstElementChild === null) {
    return;
  }
  e.target.firstElementChild.style.fontWeight = 'normal';
   
});

// обработчик для возвращения нормального текста
ul.addEventListener('mouseout', function(e){
  if  (e.target.tagName !== 'LI' || e.target.style === null) {
    return;
   }
  e.target.style.fontWeight = 'normal';
});