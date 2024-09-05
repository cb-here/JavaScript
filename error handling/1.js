try {
    alert("Hello");
    alert("World");
} catch(err) {
    alert("Error is ignored here.As there is not a error in try");
}

try {
    alert("Hello");
    lalala;
} catch(err) {
    alert("Catch is executing");
}

let a = 0;

try {
    let result = 10 / a;
    alert("Result = " + result); // Result = Infinity
} catch(err) {
    alert("Not divided by zero");
}