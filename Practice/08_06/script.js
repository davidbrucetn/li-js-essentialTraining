/**
 * Practice: Pass values between functions
 * - Create two functions
 * - - Create basic function declaration
 * - Main function creates article element with data from object
 * - Helper function creates.
 * - Create basic function expression with variable
 */

//2020/02/05 David Bruce

const navMenu = `
    <ul class="ul__nav-menu" style="list-style-type: none; display: flex;" >
        <li class="nav-item" "><a href="#home" style="margin: 1rem;">Home</li>
        <li class="nav-item"><a href="#about" style="margin: 1rem;">About</li>
        <li class="nav-item"><a href="#main" style="margin: 1rem;">Main</li>
    </ul>
 `;

const createDOMelement = (domElement) => {
    return document.createElement(domElement);
};

const makeMenu = () => {
    let navContainer = createDOMelement("nav");
    navContainer.innerHTML = navMenu;

    let bodyContainer = document.querySelector("body");
    navContainer.style.listStyleType = "none"
    navContainer.style.display = "flex";
    bodyContainer.prepend(navContainer)

}

makeMenu();