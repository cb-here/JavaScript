let uppercase = document.getElementById('uppercase');
let lowercase = document.getElementById('lowercase');
let number = document.getElementById('number');
let symbol = document.getElementById('symbol');
let range = document.getElementById('range');
let textbox = document.querySelector('#text-box');

let upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerSet = "abcdefghijklmnopqrstuvwxyz";
let numberSet = "1234567890";
let symbolSet = "/*.-+)(?/><^$%@!#";

function generateRandomSet(dataset) {
    return dataset[Math.floor(Math.random() * dataset.length)];
}

function generatePassword(password = "") {
    if(uppercase.checked) {
        password += generateRandomSet(upperSet);
    }
    if(lowercase.checked) {
        password += generateRandomSet(lowerSet);
    }
    if(number.checked) {
        password += generateRandomSet(numberSet);
    }
    if(symbol.checked) {
        password += generateRandomSet(symbolSet);
    }
    if(password.length < range.value) {
        return generatePassword(password);
    }
    textbox.value = trancatePassword(password, range.value);
} 

btn.onclick = function() {
    generatePassword();
}

function trancatePassword(str, len) {
    if (str.length > len){
        let subString = str.substring(0, len);
        return subString;
    } else {
        return str;
    }
}