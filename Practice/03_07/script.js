/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const laptop = {
    color: "black",
    manufacturer: "Dell",
    model: "XPS-15",
    isOpen: true,
    hardDisk: {
        type: "SSD",
        size: "998 GB"
    },
    toggleLid: function (lidStatus) {
        this.isOpen = lidStatus;
    },
    isCharged: true,
    useBattery: function () {
        this.isCharged = false;
    },
    plugInLaptop: function () { 
        this.isCharged = true;
    }
}

console.log("My laptop is a ", laptop.manufacturer);
console.log("The hard drive type is a ", laptop.hardDisk.type)
