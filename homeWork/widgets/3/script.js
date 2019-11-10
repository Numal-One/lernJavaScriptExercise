let ul = document.querySelector('.target');
let li = document.querySelectorAll('.target .list-itm');
let result = [];
console.log(li);
ul.addEventListener('click', (e) =>{
  
  if (!e.target.classList.contains('list-itm')){
    console.log('return');
    return;
  } 

  let thisData = e.target.dataset.number;

  if(e.shiftKey) {
    
  }

  if(e.ctrlKey) {
    mark(e);
    return;
  }
  clearMark(li);
  mark(e);
});

function mark(event){
  event.target.classList.add('marked');
  result.push(event.target.dataset.number)
}

function clearMark(li){
  li.forEach((el)=>{
    el.classList.remove('marked');
  });
  result = [];
}

function push(target){
  result.push(target.dataset.number);
}