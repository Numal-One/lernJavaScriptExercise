let thumbs = document.querySelector('#thumbs');
// обработчик кликов
thumbs.addEventListener('click',function(e){
  // клики будут на картинке, но условие такое, что
  // картинка должна быть обернута в ссылку
  let targetA = e.target.closest('a');
  // если нет ссылки, то ничего не делать
  if (targetA.tagName !== "A") {
    return;
  }
  // находим большую картинку
  let largeImg = document.querySelector('#largeImg');
  // отменяем дефолтный  ивент
  e.preventDefault();
  // переназначаем путь к картинке
  // берем его из ссылки цели
  largeImg.src = targetA.href;
});