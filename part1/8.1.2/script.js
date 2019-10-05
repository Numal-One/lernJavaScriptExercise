let pockets = {
  money: 2000
};

let bed = {
  sheet: 1,
  pillow: 2
};

let table = {
  pen: 3
};

let head = {
  glasses: 1
};


table.__proto__ = head ;
bed.__proto__ = table;
pockets.__proto__ = bed;

console.log (`${bed.glasses}`);
console.log (`${bed.glasses}`);
console.log (`${pockets.pen}`);
console.log (pockets);
