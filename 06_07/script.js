/**
 * Assignment vs comparison
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Relational_operators
 */

//2020/02/05 David Bruce

let a = 5;
let b = "5";

console.log(`let a: ${a} (${typeof a})`);
console.log(`let b: ${b} (${typeof b})`);

if (a == b) {
  console.log(`Abstract Equality Comparison Match (two equal signs)! let a and let b are the same value.`);
} else {
  console.error(`No Abstract Equality Comparison match: let a and let b are NOT same value.`);
}

if (a === b) {
  console.log(`Absolute Match! let a and let b are the same value.`);
} else {
  console.error(`No absolute match: let a and let b are NOT same value.`);
}
