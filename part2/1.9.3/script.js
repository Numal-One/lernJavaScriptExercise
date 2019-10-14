let ball = document.querySelector('#ball');
let field = document.querySelector('#field');
let centerButton = document.querySelector('.btn-ball-to-center');

centerButton.addEventListener('click', function(){
  ball.style.top = `${(field.clientHeight / 2) - ball.clientHeight / 2}px`;
  ball.style.left = `${(field.clientWidth / 2) - ball.clientWidth / 2}px`;
});

field.addEventListener('click',function(e){
  if (e.target.id === 'field'){
    let y = (e.layerY < ball.clientHeight / 2) ? (ball.clientHeight / 2) : 
    (e.layerY > (field.clientHeight - ball.clientHeight / 2)) ? (field.clientHeight - ball.clientHeight / 2) : e.layerY;
    let x = (e.layerX < ball.clientWidth / 2) ? (ball.clientWidth / 2) : 
    (e.layerX > (field.clientWidth - ball.clientWidth / 2)) ? (field.clientWidth - ball.clientWidth / 2) : e.layerX;

    ball.style.top = `${(y) - ball.clientHeight / 2}px`;
    ball.style.left = `${(x) - ball.clientWidth / 2}px`;


  }
  if (e.target.id === 'ball') {
    console.log(e.layerX);
    console.log(e.layerY);
  }
});
