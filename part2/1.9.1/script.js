
let target= document.querySelector('#example');
let output = document.querySelector('.output');
let button = document.querySelector('.btn');
button.addEventListener('click', function(){
  output.innerHTML = target.scrollHeight - target.clientHeight - target.scrollTop;
});