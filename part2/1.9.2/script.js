// инициализация нужных переменных
let outbox = document.querySelector('.outbox');
let main = document.querySelector('.main');
let outputArea = document.querySelector('.out');

// навешиваем обработчик событий на весь блок
// в зависимости от того, куда будет клик пишем логику
outbox.addEventListener('click', function(e){
  switch (e.target.className) {
    case 'btn btn16':
      main.className = '';
      main.classList.add('scroll_16');
      break;
    case 'btn btn12':
      main.className = '';
      main.classList.add('scroll_12');
      break;
    case 'btn btn5':
      main.className = '';
      main.classList.add('scroll_5');
      break;
    case 'btn btn-do':
      let result = main.offsetWidth - main.clientWidth;
      outputArea.innerHTML = `ширина скролл бара  ${result}px`;
      break;


  }
});