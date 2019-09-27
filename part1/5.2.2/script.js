let a = 6.35;
console.log(`Просто 6.35.tofixed(1) = ${a.toFixed(1)}`);
a = a*10;
a = a.toFixed(0);
a = a/10;
console.log(`После умножения и деления на 10 = ${a}`);