
let calculator = {
    a: 0,
    b: 0,
    read: () => {
        this.a = Number(prompt('Input a', '0'));
        this.b = Number(prompt('Input b', '0'));
    },
    sum: () => {
        console.log(this.a + this.b);
    },
    mul: () => {
        console.log(this.a * this.b);
    }
}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());