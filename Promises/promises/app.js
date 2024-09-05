function log(some) {
    console.log(some);
}

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("Done!"), 1000);
    // resolve(123);
});

promise.then(
    result => alert(result), // it shows 
    error => alert(error) // doesn't show
);

let promise1 = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("Whoops")), 1000);
});

promise1.then(
    result => alert(result), // doesn't show
    error => alert(error) // it shows
);

let promise2 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done"), 1000);
});

promise2.then(alert); // shows "done" after 1 seconds

// if we are interested in error only then use .catch(errorHandlingFunction)

let promise3 = new Promise(function(resolve, reject){
    setTimeout(() => reject(new Error("Whoops!")), 2000);
}); 

promise3.catch(
result => alert(result)
); // show "Whoops!" after 2 seconds