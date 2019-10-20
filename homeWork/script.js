// определяем кусок разметки, в котором находится наше приложение
const todo = document.querySelector('.todoapp');
// все будем делать через функцию.
generateTODO(todo);

// сама функция
function generateTODO(element) {
  // определение основных целей для обработчиков
  const input = element.querySelector('.new-todo');
  const ul = element.querySelector('.todo-list');
  const footer = element.querySelector('.footer');
  const count = element.querySelector('.todo-count');
  const checkAll = element.querySelector('.toggle-all');
  
  // пишем логику для добавления задчи по Enter'у
  input.addEventListener('keydown', ({keyCode, target})=>{
    if (keyCode !== 13 || target.value === '') {
      return;
    }
    let li = document.createElement('li');
    li.innerHTML = `<div class="view"><input class="toggle" type="checkbox"><label>${target.value}</label><button class="destroy"></button>
    </div>`;
    ul.insertAdjacentElement('beforeend', li);
    target.value = '';
    // функция для обновления счетчика активных задач
    countActive(ul,count);
  });
  
  // обработчик для области задачи.
  // тут 2 кнопки - это удалить задачу и отметить как завершенную
  ul.addEventListener('click', (e)=>{
    let cList = e.target.classList;
    // заверешние задач
    if (cList.contains('toggle')) {
      e.target.closest('li').classList.toggle('completed');
      // опять обновление счетчика активных задач
      countActive(ul,count);
    }
    // удаление задач
    if (cList.contains('destroy')) {
      e.target.closest('li').remove();
      // обновление счетчика
      countActive(ul,count);
    }
    
  });

  // редактирование текста задачи по двойному клику
  ul.addEventListener('dblclick', (e)=>{
    if (!e.target.tagName === "LABEL") {
      return;
    }
    let li = e.target.closest('li');
    let div = e.target.closest('.view');
    let input = document.createElement('input');
    input.className = 'edit';
    input.value = e.target.innerHTML;
    div.insertAdjacentElement('afterend',input);
    li.classList.add('editing');
    input.focus();
    
    

  });

  // Завершение редактирования задачи по Enter
  ul.addEventListener('keydown',({keyCode, target})=> {
    if (keyCode !== 13 || !target.classList.contains('edit')) {
      return;
    }

    let li = target.closest('li');
    let label = li.querySelector('.view label');
    let val = target.value;
    li.classList.remove('editing');
    label.innerHTML = val;
    target.remove();
    
  });

    // события для футера
  footer.addEventListener('click',(e)=>{
    // переменная true - если нажать на кнопку очистки выполненных
    let itButton = e.target.classList.contains('clear-completed');
    if (!e.target.href && !itButton) {
      return;
    }
    // определение основных переменных
    let taskCollection = element.querySelectorAll('.todo-list li');
    let attr = e.target.getAttribute('href');
    let aAll = element.querySelector('.filters li:nth-child(1) a');
    let aActive = element.querySelector('.filters li:nth-child(2) a');
    let aCompleted = element.querySelector('.filters li:nth-child(3) a');
    // варианты для кликов на ссылки
    switch (attr) {
      case '#/':
      aAll.classList.add('selected');
      aActive.classList.remove('selected');
      aCompleted.classList.remove('selected');
      taskCollection.forEach((el)=>{
        el.hidden = false;
      });
      break;
      case '#/active':
      aAll.classList.remove('selected');
      aActive.classList.add('selected');
      aCompleted.classList.remove('selected');
      taskCollection.forEach((el)=>{
        el.hidden = (el.classList.contains('completed')) ? true : false;
      });
      break;
      case '#/completed':
      aAll.classList.remove('selected');
      aActive.classList.remove('selected');
      aCompleted.classList.add('selected');
      taskCollection.forEach((el)=>{
        el.hidden = (el.classList.contains('completed')) ? false : true;
      });
      break;
    }
    // для клика на кнопку
    if(itButton) {
      // в хедере есть кнопка "пометить все задачи выполненными"
      // она является чекбоксом. для сброса этого чекбокса строчка ниже
      checkAll.checked = false;
      // удаление из чеклиста всех выполненных задач
      taskCollection.forEach((el)=>{
        if (el.classList.contains('completed')) {
          el.remove();
        }
      });
    }    


    
  });

  // обработчик событий для чекбокса "отметить все задачи как выполненные"
  checkAll.addEventListener('click',(e)=>{
    let taskCollection = element.querySelectorAll('.todo-list li');
    let checked = checkAll.checked;
    // в зависимости от текущего состояния чекбокса
    // пометки "выполнено" или ставим или убираем
    if(!checked) {
      taskCollection.forEach((el)=>{
      el.classList.remove('completed');
      el.querySelector('.toggle').checked = false;
      });
      return;
    ;}
    taskCollection.forEach((el)=>{
      el.classList.add('completed');
      el.querySelector('.toggle').checked = true;
    });
  });

  
  
}

// функция для обновления счетчика активных задач
// обновляет кол-во активных задач и меняет окончание у слова item
function countActive(ul,count) {
  let counter = ul.querySelectorAll('li').length - ul.querySelectorAll('li.completed').length;
  let text = (counter < 2) ? '' : 's';
  count.innerHTML = `<strong>${counter}</strong> item${text} left`;
}