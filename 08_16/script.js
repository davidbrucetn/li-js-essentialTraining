/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
import Backpack from "./components/Backpack.js";
import backpackObjectArray from "./components/data.js";

// const everydayPack = new Backpack(
//   "pack01",
//   "Everyday Backpack",
//   30,
//   "grey",
//   15,
//   26,
//   26,
//   false,
//   "December 5, 2018 15:00:00 PST",
//   "../assets/images/everyday.svg"
// );


const main = document.querySelector(".maincontent");

const displayAllBackpacks = backpackObjectArray.map((backpackObj) => {
  let newArticle = document.createElement("article");
  newArticle.classList.add("backpack");
  newArticle.setAttribute("id", backpackObj.id);
  newArticle.innerHTML = `
        <figure class="backpack__image">
          <img src=${backpackObj.image} alt=${backpackObj.name} />
        </figure>
        <h1 class="backpack__name">${backpackObj.name}</h1>
        <ul class="backpack__features">
          <li class="packprop backpack__volume">Volume:<span> ${backpackObj.volume}l</span></li>
          <li class="packprop backpack__color">Color:<span> ${backpackObj.color}</span></li>
          <li class="backpack__age">Age:<span> ${backpackObj.backpackAge()} days old</span></li>
          <li class="packprop backpack__pockets">Number of pockets:<span> ${backpackObj.pocketNum}</span></li>
          <li class="packprop backpack__strap">Left strap length:<span> ${backpackObj.strapLength.left} inches</span></li>
          <li class="packprop backpack__strap">Right strap length:<span> ${backpackObj.strapLength.right} inches</span></li>
          <li class="feature backpack__lid">Lid status:<span> ${backpackObj.lidOpen ? "open" : "closed"}</span></li>
        </ul>
  `;
  return newArticle;

})

displayAllBackpacks.forEach((backpackItem) => {
  main.append(backpackItem);
})





