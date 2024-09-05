let input = document.querySelector('input');
// alert(input);

// alert(document.body.constructor.name == 'HTMLBodyElement'); // true

// alert(document.body instanceof EventTarget);
// alert(document.body instanceof Node);
// alert(document.body instanceof Element);
// alert(document.body instanceof HTMLBodyElement);
// alert(document.body instanceof HTMLElement);

// console.log(document.body);
// console.dir(document.body);

// let elem = document.body;

// alert(elem.nodeType); // 1
// alert(elem.firstChild.nodeType); // 3
// alert(document.nodeType); // 9


// nodeName and tagName
// alert(document.body.firstChild.tagName);
// alert(document.body.firstChild.nodeName);

// alert(document.nodeName);
// alert(document.tagName);

// console.log(document.body.innerHTML);
// document.body.innerHTML = "new contents";

// document.body.innerHTML += "<b>Hello There</b>";

let p = document.querySelector('p');
console.log(p.innerHTML);
 
let chatDiv = document.querySelector('.chat');
chatDiv.innerHTML = "<b>Hello</b><img src='smile.png'>";
chatDiv.innerHTML += "How goes?";

let elem = document.querySelector('#elem');
alert(elem.outerHTML)

elem.outerHTML = "<p>I am new here</p>";
alert(elem.outerHTML);
