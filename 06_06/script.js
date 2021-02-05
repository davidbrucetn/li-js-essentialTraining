/**
 * Data types in JavaScript
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
 */

//2020/02/05 David Bruce

// String:
let stringDemo = "A string of text.";
console.log("String:", stringDemo, typeof stringDemo);

// Numbers:
let integerDemo = 4;
console.log("Integer:", integerDemo, typeof integerDemo);

let floatDemo = 5.6;
console.log("Floating point number:", floatDemo, typeof floatDemo);

// Boolean:
let booleanDemo = true;
console.log("Boolean value:", booleanDemo, typeof booleanDemo);

// Null value (nothing):
let nullDemo = null;
console.log("Null value:", nullDemo, typeof nullDemo);

// Undefined:
let undefinedDemo;
console.log("Undefined:", undefinedDemo, typeof undefinedDemo);

let undefinedAssignedDemo = undefined;
console.log("Undefined assigned:", undefinedAssignedDemo, typeof undefinedAssignedDemo);

// Object:
const objectDemo = {
  dance: "Mambo",
  number: 5,
};
console.log("Object:", objectDemo, typeof objectDemo);

// Array:
const arrayDemo = ["tango", "foxtrot", "waltz", "rumba", "bolero"];
console.log("Array:", arrayDemo);
