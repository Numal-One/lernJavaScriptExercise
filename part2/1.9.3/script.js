//инициализация нужных переменных
let ball = document.querySelector('#ball');
let field = document.querySelector('#field');
let centerButton = document.querySelector('.btn-ball-to-center');

// реализация поведения кнопки "To center"
centerButton.addEventListener('click', function(){
  ball.style.top = `${(field.clientHeight / 2) - ball.clientHeight / 2}px`;
  ball.style.left = `${(field.clientWidth / 2) - ball.clientWidth / 2}px`;
});

// реализация перемещения мяча по клику мыши
// навешиваем обработчик на поле
field.addEventListener('click',function(e){
  // если объект не мяч, то
  if (e.target.id === 'field'){
    // вся эта лабуда всего лишь не дает мячу быть на черной рамке. если кликнуть близко к краю зеленого поля
    // мяч все равно позиционируется в пределах зеленого поля
    let y = (e.layerY < ball.clientHeight / 2) ? (ball.clientHeight / 2) : 
    (e.layerY > (field.clientHeight - ball.clientHeight / 2)) ? (field.clientHeight - ball.clientHeight / 2) : e.layerY;
    let x = (e.layerX < ball.clientWidth / 2) ? (ball.clientWidth / 2) : 
    (e.layerX > (field.clientWidth - ball.clientWidth / 2)) ? (field.clientWidth - ball.clientWidth / 2) : e.layerX;

    // задаем координаты мячу. учитываем размер мяча
    ball.style.top = `${(y) - ball.clientHeight / 2}px`;
    ball.style.left = `${(x) - ball.clientWidth / 2}px`;


  }
  
});
