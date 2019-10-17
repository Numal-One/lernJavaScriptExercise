let table = document.querySelector('#grid');
grid.addEventListener('click', function(e){
  let targetType = e.target.dataset.type;
  
  if (!targetType) {
    return;
  }
  let tBody = document.querySelector('#grid tbody');
  let tRows = [...tBody.querySelectorAll('tr')]; 
  // tBody.innerHTML = '';
  // строка выше убрана, т.к. append не добавляет строки, 
  // а перемещает их
  tRows.sort(sortFn(targetType));
  tBody.append(...tRows);
});

function sortFn (type) {
  return (tr1, tr2) => {
    let [num1, str1] = tr1.querySelectorAll('td');
    let [num2, str2] = tr2.querySelectorAll('td');
    let a = type === 'string'
     ? str1.innerHTML
     : Number(num1.innerHTML);
    let b = type === 'string'
     ? str2.innerHTML
     : Number(num2.innerHTML);
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  }
}