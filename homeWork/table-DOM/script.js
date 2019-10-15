// выбираем все строки в таблице
let rows = document.querySelectorAll('.js-teachers tbody>tr');

// перебираем полученную коллекцию
for (let row of rows) {
  
  let status = row.children[3].dataset.available;
  let age = Number(row.children[1].textContent);
  let sex = row.children[2].textContent;

  // проверяем атрибут последней ячейки
  switch (status) {
    case 'true':
      row.classList.add('available');
      break;
    case 'false':
      row.classList.add('unavailable');
      break;
    default:
      row.hidden = true;
  }

  // проверяем ячейку с полом
  switch (sex) {
    case 'm':
      row.classList.add('male');
      break;
    case 'f':
      row.classList.add('female');
  }

  // проверяем ячейку возраста
  if (age < 18) {
    row.style.textDecoration = 'line-through';
  }
 
}