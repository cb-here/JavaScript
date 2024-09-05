function myDisplayer(some) {
    document.getElementById("demo1").innerHTML = some;
}

function myCalculator(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum);
}

myCalculator(4, 3,myDisplayer);