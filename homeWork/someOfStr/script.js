// 'aaabbccdda' => '3a2b2c2d1a' 3a2b2c2d1a

let str1 = 'aaabbccdda';
console.log(doSome(str1));

function doSome(str) {
  let counter = 0;
  let resultStr = "";
  for (let i = 0; i < str.length; i++) {
    counter++;
    // если следующий символ не равен текущему, то результат суммируем в resultStr
    if (!(str[i] === str[i+1])) {
      resultStr = resultStr + `${counter}${str[i]}`;
      counter = 0;
    }
  }
  return resultStr;
}
