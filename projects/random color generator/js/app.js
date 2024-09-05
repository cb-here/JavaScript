let btn = document.querySelector('button');

function colorGenerator() {
    let randomNumber = Math.floor(Math.random() * 16777235);
    let randomCode = "#" + randomNumber.toString(16);
    return randomCode;
}
btn.onclick = function() {
    document.querySelector('.container').style.backgroundColor = colorGenerator();
    document.querySelector('input').value = colorGenerator();
}