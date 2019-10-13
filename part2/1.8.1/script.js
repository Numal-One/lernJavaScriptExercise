let inputObject = {
  top: 10, // 10px от верхней границы окна (по умолчанию 0px)
  right: 10, // 10px от правого края окна (по умолчанию 0px)
  html: "Hello!", // HTML-уведомление
  className: "welcome" // дополнительный класс для div (необязательно)
};
setTimeout(() =>{
  showNotification(inputObject);
},1000);

function showNotification(obj) {
  let div = document.createElement('div');
  setTimeout(() =>{
    div.classList.add('notification');
    div.classList.add(obj.className);
    div.textContent = obj.html;
    div.style.top = `${obj.top}px`;
    div.style.right = `${obj.right}px`;
    document.body.insertAdjacentElement('beforebegin',div);
  },1000);
  
  setTimeout(()=>{
    div.outerHTML = '';
  },3000);
}