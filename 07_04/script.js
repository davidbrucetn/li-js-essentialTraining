/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

//2020/02/05 David Bruce

const collection = [];
let firstItem = "carrot";
collection.push(firstItem);
let secondItem = "food";
collection.push(secondItem);
let thirdItem = "apple";
collection.push(thirdItem);
let fourthItem = "drink";
collection.push(fourthItem);
let fifthItem = "eat";
collection.push(fifthItem);
let sixthItem = "banana";
collection.push(sixthItem);
let seventhItem = "yellow";
collection.push(seventhItem);
let eighthItem = "vegetables";
collection.push(eighthItem);

console.log(collection);
console.log("Removing the last item: ", collection.pop());
console.log(collection);
console.log("Adding the last item to the beginning:", collection.unshift(eighthItem))
console.log(collection);
console.log("Sorting the array:", collection.sort())


let found = collection.find(item => item === "yellow");
console.log("Found the banana: ", found)
collection.splice(collection.indexOf(found), 1);
console.log("Removed the yellow item:", collection);