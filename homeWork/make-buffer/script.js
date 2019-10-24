// Реализация строкового буфера без метода очистки

function makeBuffer1(){
  let bufferVal = '';
    return function(val) {
      if (val === undefined) {
        return bufferVal;
      }
      bufferVal += val;
    }

}

// реализация с методом очистки
function makeBuffer2(){
  let bufferVal = '';
  // создаем функцию для изменения и вывода значений
  function innerFunc(val) {
    if (val === undefined) {
      return bufferVal;
    }
    bufferVal += val;
  }
  // добавляем метод для очистки буфера
  innerFunc.clear =  function(){
    bufferVal = '';
  }
  return innerFunc;
}


let buffer = makeBuffer2();