function unique(arr) {

  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i], i + 1)) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(`${unique(strings)}`);