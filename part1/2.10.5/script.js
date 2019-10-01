
let users = ['Сотрудник','Директор','', 'Неведомая хрень'];
let login = users[3];
let message = (login == 'Сотрудник') ? 'Привет': 
              (login == 'Директор') ? 'Здравствуйте': 
              (login == '') ? 'Нет логина' : 'о.О';
console.log(message);
