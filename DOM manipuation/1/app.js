console.log("Hello World");
// global object --> window
// window.alert("Hello");
function  sayHi() {
    alert("Hello");
}
// window.sayHi();

// alert(window.innerHeight);

// DOM --> page content as object

document.body.style.background = "red";
setTimeout(() => {
    document.body.style.background = ""
}, 3000);

// BOM --> addition objects provided by browser

// alert(navigator.userAgent);
// alert(navigator.platform);

// alert(location.href);
// if (confirm('Go to wikipedia?'))
//     location.href = "https://wikipedia.com"