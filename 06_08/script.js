/**
 * Arithmetic operators
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Arithmetic_operators
 */

//2020/02/05 David Bruce

let a = 5;
let b = 4;
let c = 3.2;

console.log(`let a: ${a} (${typeof a})`);
console.log(`let b: ${b} (${typeof b})`);
console.log(`let c: ${c} (${typeof c})`);

let result = a + b;

console.log("Addition Result: ", result);

result = a * b;
console.log("Multiplication Result: ", result);

result = a / b;
console.log("Division Result: ", result);

result = a % b;
console.log("Modulo Result: ", result);

console.log("++a increments immediately: ", ++a);
console.log("a++ increments afterward: ", a++)
console.log("Now a is : ", a)