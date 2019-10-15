let target = document.querySelector('.txt');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

btn1.addEventListener('click', ()=> (target.hidden = true));
btn2.addEventListener('click', function(){this.hidden = true});
