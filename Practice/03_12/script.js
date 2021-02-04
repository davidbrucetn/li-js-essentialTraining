/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Laptop from "./Laptop.js";

const myLaptop = new Laptop(
    "silver",
    "Dell",
    "XPS 15",
    true,
    true,
    "998 GB",
    "SSD",
    "Samsung"
)

console.log("My laptop is a ", myLaptop.manufacturer + " " + myLaptop.model)
console.log("The Laptop class was used to instantiate the myLaptop object: ", myLaptop)
console.log(myLaptop.plugInLaptop())
console.log(myLaptop)



