let arr1 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr1));
// отфильтровать анаграммы - слова у которых те же буквы в том же количестве, но они располагаются в другом порядке.
function aclean(arr) {
  let resultArr = [];//создаем массив для return
  let innerSet = new Set();// создаем сет для проверки
  //выполним перебор массива строк
  arr.forEach((el, index) => {
    // для каждого элемента массива (строки) выполним перестановку символов в алфавитном порядке
    // для того, что бы строки-анаграммы стали просто равными строками.
    
    let sortedEl = el.toLowerCase().split('').sort().join('');
    // проверяем, есть ли такая строка в коллекции set, если нет, то
    // 1. пушим в resultArr элемент входного массива с тем же index.
    // 2. добавляем элемент в коллекцию Set
    if (!innerSet.has(sortedEl)) {
      resultArr.push(arr[index]);
      innerSet.add(sortedEl);
    }
  });
  return resultArr;
 
}