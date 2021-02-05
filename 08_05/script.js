/**
 * How arrow functions help us with scoping.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#this_and_Arrow_Functions
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 */

// Define a default volume for the window (the entire DOM):
window.volume = 20;

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
  newVolume: function (volume) {
    console.log("this.volume in the method:", this.volume);
    this.volume = volume;
    console.log("this.volume after update:", this.volume);
    // 2020/02/15 David Bruce
    // The Immediately Invoked Function Expression will use the global scope
    (function () {
      console.log("this.volume in nested function:", this.volume);
    })();
    // The arrow will use the local scope
    (() => {
      console.log("this.volume in nested function:", this.volume);
    })();
  },
};

console.log(greenPack.newVolume(5));
