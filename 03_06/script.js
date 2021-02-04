/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};


//Dot notation
console.log("Here's the backpack object:", backpack);
console.log("Dot Notation to access the properties, the pocketNum val backpack.pocketNum: ", backpack.pocketNum)
console.log("Left strap backpack.strapLength.left: ", backpack.strapLength.left)

//Bracket Notation
console.log("Bracket Notation to access the properties, the pocketNum val backpack[\"pocketNum\"]: ", backpack["pocketNum"])
var query = "pocketNum";
console.log("var query = \"pocketNum\"")
console.log("Bracket Notation to access the properties with a variable, the pocketNum val backpack[query]: ", backpack[query])
