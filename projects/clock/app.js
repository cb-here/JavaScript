let inputs = document.querySelectorAll('input');
function clock() {
    let d = new Date();
    inputs[0].value = d.getHours();
    inputs[1].value = d.getMinutes();
    inputs[2].value = d.getSeconds();
}

setInterval(() => clock(), 1000);

function getColor() {
    let randomNumber = Math.floor(Math.random() * 16777235);
    let randomCode = "#" + randomNumber.toString(16);
    return randomCode;
}

function changeBackground() {
    document.querySelector('.main').style.backgroundColor = getColor();
}
setInterval(() => {
    changeBackground()
}, 10000);