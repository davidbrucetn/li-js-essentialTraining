/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 * DWB Notes:  1) Create new article element and populate with content from object props, returning new element
 * DWB Notes:  2) 2nd Helper) function called by main function, create figure element, 
 *                pop w/image pointing to img URL defined in obj,
 *                Add <figcaption> with the img description, return whole figure
 *             3) Use querySelector and append method, pass obj to main function, pass to fig function, and
 *                return everything to the main function.
 */

const frogpack = {
  name: "Frog Backpack",
  volume: 8,
  color: "green",
  pocketNum: 3,
  strapLength: {
    left: 10,
    right: 10,
  },
  lidOpen: false,
  image: "../../assets/images/frog.svg",
  description: "Fig. 1a Frog Backpack, green",
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

// Baseline HTML output
const content = `
    <h1 class="backpack__name">${frogpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${frogpack.volume
  }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${frogpack.color
  }</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${frogpack.pocketNum
  }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${frogpack.strapLength.left
  } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${frogpack.strapLength.right
  } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${frogpack.lidOpen ? "open" : "closed"
  }</span></li>
    </ul>  
`;

const main = document.querySelector("main");



const objFigure = (figObject) => {
  let newObjFigure = document.createElement("figure");
  let newObjImage = document.createElement("img");
  newObjImage.setAttribute("src", figObject.image);
  newObjImage.setAttribute("alt", figObject.name);
  let newObjFigCaption = document.createElement("figcaption");
  newObjFigCaption.innerText = figObject.description;
  newObjFigure.append(newObjImage, newObjFigCaption);
  return newObjFigure;
};

const setUpPackArticle = (myObject) => {
  const objArticle = document.createElement("article");
  objArticle.innerHTML = content;
  objArticle.prepend(objFigure(myObject))
  return objArticle;

};

// setUpPackArticle(frogpack);
main.append(setUpPackArticle(frogpack))
