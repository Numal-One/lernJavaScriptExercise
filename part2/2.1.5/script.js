let ul = document.querySelector('.container > ul');
let head = document.querySelector('.header');

head.addEventListener('click',function(){
  head.classList.toggle('closed');
  head.classList.toggle('opened');
  ul.hidden = (ul.hidden) ? false : true;
});