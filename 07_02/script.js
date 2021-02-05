/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */


let item = "flashlight";


//Array of different data types
const collection = ["Piggy", item, 5, true];

console.log(collection);


//2020/02/05 David Bruce
const newCollection = [];
let pens = "pens";
newCollection.push(pens);
let text = "This is a simple sentence.";
newCollection.push(text);
let number = 5;
newCollection.push(number);
var lei = {
    flower: 1
};
newCollection.push(lei);
const headlamp = "bright";
newCollection.push(headlamp);

console.log("newCollection: ", newCollection)
console.log("newCollection has ", newCollection.length, " items");


console.log("Push adds item to end of array");
console.log("Pop removes last item off array.");
console.log("shift removes first item.");
console.log("unshift adds item to beginning of array");


