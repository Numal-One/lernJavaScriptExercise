// инициализация нужных переменных. сама таблица, заголовок и тело таблицы
let rows = document.querySelectorAll('#table tr+tr');
let tHeader = document.querySelector('#table tr:first-child');
let table = document.querySelector('#table');
// ощичаем таблицу
table.innerHTML = '';
// вставляем заголовок таблицы
table.insertAdjacentElement('beforeend', tHeader);

// коллекцию со строками делаем массивом
rows = Array.from(rows);

// сортируем массив по ячейке с именем
rows.sort((a,b) => {
  if (a.firstElementChild.textContent > b.firstElementChild.textContent) return 1;
  if (a.firstElementChild.textContent < b.firstElementChild.textContent) return -1;
  return 0;
});

// вставляем строки в таблицу
for (let row in rows) {
  table.insertAdjacentElement('beforeend', rows[row]);
}

