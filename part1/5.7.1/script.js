let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));

function showSetAsString(anySet){
  
  return result;
}
function unique(arr) {
  let setCollection = new Set();
  for (let name of arr) {
    setCollection.add(name);
  }
  let result = [];
  setCollection.forEach(el => {
    result.push(el);
  });

  return result.join(' ');
  
}

