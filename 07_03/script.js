/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */



let backpackContents = ["piggy", "headlamp", "pen"];

//2020/02/05 David Bruce
backpackContents.unshift("pencil", 5);
backpackContents.shift();
backpackContents.unshift("elephant")
backpackContents.push("end");


console.log("Plain array:", backpackContents)
console.log("Separator with join: ", backpackContents.join(", "));


backpackContents.forEach(function (item) {
    item = `<li>${item}</li>`;
    console.log(item);
});

let longItems = backpackContents.find(function (item) {
    if (item.length >= 5) {
        return item;
    }
});
console.log("longItems:", longItems);

console.log("Plain array:", backpackContents)
