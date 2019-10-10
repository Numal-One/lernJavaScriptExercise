
//входные данные
let tar = document.querySelector('.target');
let year = 2015;
let month = 8;

createCalendar(tar, year, month);


function createCalendar(target, year, month) {
// создаем элемент таблица
  let table = document.createElement('table');
  // создаем элемент хедер таблицы
  let tHead = document.createElement('thead');
  // заполняем хедер шапкой. шапка в нашем случае является строкой
  tHead.insertAdjacentHTML('afterbegin','<thead><tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Вс</th></tr></thead>');
  // помещаем хедер в таблицу
  table.insertAdjacentElement('beforeend', tHead);
  // создаем тело таблицы
  let tBody = document.createElement('tbody');
  // создаем объект дата согласно входным данным
  let inputDate = new Date(year, month);

  // будем крутить цикл в пределах текущего месяца
  while (inputDate.getMonth() === (month)){
    // каждую итерацию создаем по табличной строке, которая в календаре является неделей
    let tRow = document.createElement('tr');
    
    // цикл создания и заполнения ячеек в строке
    for (let i = 0; i < 7; i++) {
      // создаем ячейку
      let tCell = document.createElement('td');
      // по началу ячейки могут быть пустыми, если месяц начинается не с понедельника
      // и так же для пустых ячеек в конце месяца - проверка текущего месяца.
      if ((inputDate.getDay() === i) && (inputDate.getMonth() === (month))) {
        // если же месяц уже начался, то заполняем ячейку днем месяца
        tCell.textContent = `${inputDate.getDate()}`;
        // увеличиваем день на 1
        inputDate.setDate(inputDate.getDate() + 1);
      }
      // вставляем ячейку в строку
      tRow.insertAdjacentElement('beforeend', tCell);
    } 
    // вставляем готовую строку в тело таблицы
    tBody.insertAdjacentElement('beforeend', tRow);

  }
  // вставляем все тело таблицы в таблицу после заголовка
  table.insertAdjacentElement('beforeend', tBody);
  // вставляем таблицу в целевой тэг
  target.insertAdjacentElement('afterbegin', table);

   
}