/**
 * Scope and the var statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */

//Var value is changed three times, and javascript processes code top-down

var color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "skyblue"; // David 2020/02/05 reassignment midway down.

function headingColor() {
    //another reassignment with globally-scoped var
    color = "blue";
    document.querySelector(".title").style.color = color;
}


document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;



headingColor();
