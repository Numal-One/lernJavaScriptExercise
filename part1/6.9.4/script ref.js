// определяем функцию.
// печатает в консоль аргументы
function f(...args){
  console.log(`${args}`);
}


let func1 = throttle(f, 1000);

// добавляем обработчик событий, который будет передавать координаты курсора в функцию
document.addEventListener('mousemove', ({clientX, clientY})=> {
  func1(clientX, clientY);
});

// пишем функцию-обертку
function throttle(func, delay) {
  // флаг, разрешающий выполнение.
  let doIt = true;
  // инициализация id для setTimeout
  let timeId1;
  
  // возвращаем функцию
  function result(...args) {
    // блок, описывающий вычисления при флаге doIt = false
    // при вызове функции (при движении мыши) между "разрешенными вызовами"
    // будет каждый раз обновлять setTimout при вызове.
    // в случае остановки курсора будет вызывать функцию с задержкой.
    if (!doIt) {
      clearTimeout(timeId1);
      timeId1 = setTimeout(()=>{
        func(...args);
      },delay);
      return;
    }

    // блок, описывающий вычисления при флаге doIt = true
    // в случае, пока курсор не останавливается и вызовы продолжаются
    // будет выполнять код функции один раз в установленный интервал.
    // при это очищая id для таймаута из 1го блока. 
    if (doIt) {
      clearTimeout(timeId1);
      func(...args);
      doIt = false;
      setTimeout(()=>{
        doIt = true; 
      },delay);
    } 

    
  }
  return result;
}





