let user = { name: "John", years: 30 };

// ваш код должен быть с левой стороны:
// ... = user

let {name, years: age, isAdmin = false} = user;
console.log(name);
console.log(age);
console.log(isAdmin);