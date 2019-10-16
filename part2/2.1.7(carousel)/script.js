// код для нумерации картинок
// сделано для удобства отладки
// код взят из задания
let i = 1;
    for(let li of document.querySelectorAll('li')) {
      li.style.position = 'relative';
      li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
      i++;
    }

    // инициализация необходимых переменных
let cont = document.querySelector('.container');
let ul = document.querySelector('.ul_cont ul');
let lArrow = document.querySelector('.arrow_left');
let rArrow = document.querySelector('.arrow_right');

// обработчик кликов
cont.addEventListener('click', function(e){
  
  // переменная текущей позиции
  let leftPosition = Number(ul.style.left.slice(0,-2));
  
  // эвент для "левой" кнопки
  if(e.target.classList.contains('arrow_left')) {
    // переменная смещения.
    let offset = (leftPosition + 390 > 0) ? 0 : leftPosition + 390;
    
    // отключение кнопок в крайних позициях слайдера
    lArrow.disabled = (offset === 0) ? true: false;
    rArrow.disabled = (offset === -910) ? true: false;
    
    // установка смещения
    ul.style.left = `${offset}px`;
  }

  // эвент для "правой" кнопки
  if(e.target.classList.contains('arrow_right')) {
    let offset = (leftPosition - 390 < -910) ? -910 : leftPosition - 390;
    lArrow.disabled = (offset === 0) ? true: false;
    rArrow.disabled = (offset === -910) ? true: false;
    ul.style.left = `${offset}px`;
  }
});