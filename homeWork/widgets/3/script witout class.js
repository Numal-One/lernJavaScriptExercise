
let ul = document.querySelector('.target');
let li = document.querySelectorAll('.target .list-itm');
let btn = document.querySelector('.btn');
let _resultList = [];
let lastData = null;
let thisData = null;
console.log(li);
btn.addEventListener('click',()=>{
  printList();
});

// ----------------------------------------------------------------
ul.addEventListener('selectstart',(e)=>{e.preventDefault()});
ul.addEventListener('click', (e) =>{
 
  if (!e.target.classList.contains('list-itm')){
    return;
  } 
  thisData = Number(e.target.dataset.number);

  //---------------------------------------------------------------
  if(e.shiftKey) {
    let maxData = Math.max(lastData, thisData);
    let minData = Math.min(lastData, thisData);
    li.forEach((el)=>{
      let elData = Number(el.dataset.number)
      if( elData >= minData && elData <= maxData){
        mark(el);
      }
      
    });
    lastData = thisData;
    return;
  }
  // -----------------------------------------------------------
  if(e.ctrlKey) {
    mark(e.target);
    lastData = thisData;
    return;
  }
  // ---------------------------------------------------------
  clearMark(li);
  mark(e.target);
  lastData = thisData;
});

function mark(target){
  target.classList.add('marked');
  _resultList.push(target.dataset.number)
}

function clearMark(li){
  li.forEach((el)=>{
    el.classList.remove('marked');
  });
  _resultList = [];
}

function printList(){
  let printArr = [];
  li.forEach((el)=>{
    let number = el.dataset.number;
    if (resultList.includes(number)){
      printArr.push(el.textContent);
    }
  });
  console.log(...printArr);
}
