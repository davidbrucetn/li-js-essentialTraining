/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

//2020/02/07 David Bruce


const container = document.querySelector(".container");
const grid = document.querySelector(".grid");
grid.addEventListener("mouseenter", (e) => {
    grid.style.outline = "4px solid darkgreen";
})
grid.addEventListener("mouseleave", (e) => {
    grid.style.outline = "";
})

document.querySelectorAll(".cell").forEach((cell) => {
    cell.addEventListener("click", (e) => {
        cell.style.backgroundColor !== "blue" ? cell.style.backgroundColor = "blue" : cell.style.backgroundColor = "hsl(0, 0%, 90%)";
    })
    cell.addEventListener("mouseenter", (e) => {
        cell.style.outline = "3px solid skyblue";
    })
    cell.addEventListener("mouseleave", (e) => {
        cell.style.outline = "";
    })

})

const docBody = document.body;
docBody.addEventListener("keydown", (e) => {
    if (e.code === "KeyP") {
        docBody.style.backgroundColor === "darkgrey" ? docBody.style.backgroundColor = "" : docBody.style.backgroundColor = "darkgrey";
    }
})