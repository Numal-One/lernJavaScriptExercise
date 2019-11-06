let dictionary = Object.create(null);

dictionary.toString = function() {
  let result = [];
  for (let key in dictionary) {
    result.push(key) ;
  }

  return result.join(', ');
}

Object.defineProperty(dictionary, "toString", {
  enumerable: false
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test"; 

for(let key in dictionary) {
  console.log(key); 
}

console.log('' + dictionary); 