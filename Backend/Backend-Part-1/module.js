const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

const PI = 3.14;

let obj = {
    add: add,
    sub: sub,
    mul: mul,
    div: div,
    PI: PI
};

module.exports = obj;