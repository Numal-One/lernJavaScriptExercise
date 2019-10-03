let style = `
  position: absolute;
  top: -999px;
  left: 0px;
  right: auto;
  bottom: auto;
  border: 0px;
  box-sizing: content-box;
  word-wrap: break-word;
  overflow: hidden;
  height: 0px !important;
  min-height: 0px !important;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0px;
  text-transform: none;
  word-spacing: 0px;
  text-indent: 0px;
  line-height: 20px;
  width: 191px;
`;



console.log(styleToObject(style));

function styleToObject(str) {
    
    let resultObj = {};
    
    let styleArr = str.split(";"); // сплитим всю строку
    // перебираем полученный массив
    styleArr.forEach(el => {
        let keyVal = el.split(':'); //сплитим каждый элемент массива на пару ключ:значение
        let key = keyVal[0];
        let val = keyVal[1];
        
        /* при split(';') последним элементом массива получается строка с одним 
        символом перевода строки и шаблон split(':') возвращает массив 
        из 1 элемента с символом перевода строки. Соответсвтенно val = kayVal[1]
         вернет undefined. Его не должно быть в объекте, поэтому реализуем проверку*/
        if (!(key === undefined || val === undefined)) { 
            key = key.trim();
            val = val.trim();
            resultObj[key] = val;
        }
       
    });
  return {resultObj};
}