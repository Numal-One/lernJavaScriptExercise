let arr1 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr1));
// отфильтровать анаграммы - слова у которых те же буквы в том же количестве, но они располагаются в другом порядке.
function aclean(arr) {
  let innerSet = new Set();// создаем сет для проверки
  return  arr.filter((el, index) => {    
    let sortedEl = el.toLowerCase().split('').sort().join('');
    if (innerSet.has(sortedEl)) {
       return false;
    }
    innerSet.add(sortedEl);
    return true;
  });
}
 
