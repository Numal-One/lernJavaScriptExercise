function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    // для сохранения для каждой функции "своего" порядкового номера
    // в ее замыкании добавим переменную а
    let a = i; 
    let shooter = function() { // функция shooter
      console.log( a ); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0]();
army[1]();
army[2]();
army[3]();
army[4]();
army[5]();
army[6]();
army[7]();
army[8]();