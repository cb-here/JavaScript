console.log("Hello");

class Menu {
    handleEvent(event) {
        let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
        this[method](event);
    }
    onMousedown() {
        elem.innerHTML = "mouse down";
    }
    onMouseup() {
        elem.innerHTML += ".. and up";
    }
}
let menu = new Menu();
elem.addEventListener('mousedown', menu.handleEvent);
elem.addEventListener('mouseup', menu);
