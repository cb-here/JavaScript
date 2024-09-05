// let elem = document.getElementById('elem');
// elem.style.background = "red";

let elements = document.querySelectorAll('ul>li:last-child');

for (let elem of elements) {
    // alert(elem.innerHTML);
    elem.style.background = "green";
}

let elem = document.querySelector('.active');
elem.style.background = "yellow";

for (let elem of document.body.children){
    if (elem.matches('a[href$="zip"')){
        // alert("Here is the link: " + elem.href);
        console.log("Hello");
    }
}