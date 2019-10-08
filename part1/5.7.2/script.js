let arr1 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr1));

function aclean(arr) {
  let resultArr = [];
  let innerSet = new Set();
  arr.forEach((el, index) => {
    let sortedEl = el.split('').sort().join('').toLowerCase();
    if (!innerSet.has(sortedEl)) {
      resultArr.push(arr[index]);
      innerSet.add(sortedEl);
    }
  });
  return resultArr;
 
}