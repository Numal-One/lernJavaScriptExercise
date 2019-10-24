//инициализация нужных переменных
let ball = document.querySelector('#ball');
let halfBallH = ball.clientHeight / 2;
let halfBallW = ball.clientWidth / 2;
let field = document.querySelector('#field');
let centerButton = document.querySelector('.btn-ball-to-center');

// реализация поведения кнопки "To center"
centerButton.addEventListener('click', function(){
  // вычисления середины поля оставил на случай, если размер поля будет меняться
  ball.style.top = `${(field.clientHeight / 2) - halfBallH}px`;
  ball.style.left = `${(field.clientWidth / 2) - halfBallW}px`;
});

// реализация перемещения мяча по клику мыши
// навешиваем обработчик на поле
field.addEventListener('click',function(e){
  // если объект не мяч, то
  if (e.target.id === 'field'){
    // вся эта лабуда всего лишь не дает мячу быть на черной рамке. если кликнуть близко к краю зеленого поля
    // мяч все равно позиционируется в пределах зеленого поля
    let y = (e.layerY < halfBallH) ? (halfBallH) : 
    (e.layerY > (field.clientHeight - halfBallH)) ? (field.clientHeight - halfBallH) : e.layerY;
    let x = (e.layerX < halfBallW) ? (halfBallW) : 
    (e.layerX > (field.clientWidth - halfBallW)) ? (field.clientWidth - halfBallW) : e.layerX;

    // задаем координаты мячу. учитываем размер мяча
    ball.style.top = `${(y) - halfBallH}px`;
    ball.style.left = `${(x) - halfBallW}px`;


  }
  
});
