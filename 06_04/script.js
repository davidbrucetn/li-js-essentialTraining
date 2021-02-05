/**
 * The let statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */


//2020/02/05 David Bruce
//Mutable variable - use a let
//Immutable global - use a var

//This let assigns a variable in global scope
let color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "skyblue";

function headingColor() {
  //let creates another variable with local scope to that function.
  let titleColor = "blue";
  document.querySelector(".title").style.color = titleColor;
  console.log("Inside: ", titleColor)
}

headingColor();

//Will not work since variable is locally-scoped. JavaScript will stop rendering here at error
//console.log("Outside function: ", titleColor)


document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;
