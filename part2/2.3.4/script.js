// нужны 2 обработчика.
// первый на mouseover
document.body.addEventListener('mouseover',function(e){
  let target = e.target;
  //если цель без тултипа, то ничего не делать
  if (!target.dataset.tooltip) {
    return;
  }
  // создаем элемент с тултипом,
  let tTip = document.createElement('div');
  // добавляем ему класс
  tTip.classList.add('tooltip');
  // текст из аттрибута
  tTip.innerHTML = e.target.dataset.tooltip;
  // вставляем тултип перед кнопкой-целью
  target.insertAdjacentElement('beforebegin', tTip);
  // устанавливаем координаты тултипа
  setCoord(tTip, target);
});

// второй на mouseout
document.body.addEventListener('mouseout', function(e){
  let target = e.target;
  // проверка на таргет
  if (!target.dataset.tooltip) {
    return;
  }
  // если цель та, то удаляем тултип
  let tTip = document.querySelector('.tooltip');
  tTip.remove();
});

// функция для позиционирования тултипа
function setCoord(tTip, target){
  // определяем размеры тултипа
  let tipHeight = tTip.offsetHeight;
  let tarHeight = target.offsetHeight;
  // определяем отступы до кнопки сверху и слева
  let tarTop = target.offsetTop - window.pageYOffset;
  let tarLeft = target.offsetLeft;

  // выбираем отступы в зависимости от 
  // высоты тултипа и свободного пространства над кнопкой
  let tipTop = (tarTop > tipHeight)
    ? (tarTop - tipHeight - 2)
    : (tarTop + tarHeight + 2);
  let tipLeft = tarLeft;
    
  // позиционируем тултип
  tTip.style.left = `${tipLeft}px`;
  tTip.style.top = `${tipTop}px`;
}