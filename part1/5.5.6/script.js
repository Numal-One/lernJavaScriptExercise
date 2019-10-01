function Calculator(){
    this.methods = {
        '+': (a,b) => a + b,
        '-': (a,b) => a - b,
    }
    this.calculate = function(str) {
        let innerArr = str.split(' ');
        let a = Number(innerArr[0]);
        let b = Number(innerArr[2]);
        let oper = innerArr[1];
        return this.methods[oper](a,b);
    }
    this.addMethod = function(name, func) {
       this.methods[name] = func;
    }
}

let calc = new Calculator;
console.log(calc.calculate("3 - 7") );

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

console.log(powerCalc.calculate('2 * 3'));