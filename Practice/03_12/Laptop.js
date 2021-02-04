/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

const Laptop = class {
    constructor(
        color,
        manufacturer,
        model,
        isOpen,
        isCharged,
        hddSize,
        hddType,
        hddMake

    ) {
        this.color = color;
        this.manufacturer = manufacturer;
        this.model = model;
        this.isOpen = isOpen;
        this.isCharged = isCharged;
        this.hddMake = hddMake;
        this.hddSize = hddSize;
        this.hddType = hddType

    }
    toggleLid(lidStatus) {
        this.isOpen = lidStatus;
    }
    useBattery() {
        this.isCharged = false;
    }
    plugInLaptop() {
        this.isCharged = true;
    }
}



export default Laptop;