let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

console.log(`width:${menu.width}, height:${menu.height}, title:${menu.title}`);

// после вызова функции
menu1 = {
  width: 400,
  height: 600,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if ((typeof obj[key]) === 'number') {
      obj[key] = obj[key] * 2;
    }
  }
}