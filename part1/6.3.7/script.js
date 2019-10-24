function makeArmy() {
  var shooters = [];

  var i = 0;
  while (i < 10) {
    
    function shooter(i){
      return function() { // функция shooter
        debugger;
        console.log( i ); // должна выводить порядковый номер
      };
    }
   
    shooters.push(shooter(i));
    i++;
  }

  return shooters;
}

var army = makeArmy();

army[0]();
army[1]();
army[2]();
army[3]();
army[4]();
army[5]();
army[6]();
army[7]();
army[8]();