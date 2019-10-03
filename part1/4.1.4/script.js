let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

console.log(`${sumSalary(salaries)}`);

function sumSalary(obj) {
  let result = 0;
  for (let key in obj) {
    result += Number(obj[key]);
  }
  return result;
}