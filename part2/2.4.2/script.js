let cont = document.querySelector('#contents');
cont.addEventListener('click',function(e){
  let targetA = e.target.closest('a');
  if(!targetA) {
    return;
  }
  let doIt = confirm(`Хотите перейти на ${targetA.href}`);
  if (!doIt) {
    e.preventDefault();
  }
  
});