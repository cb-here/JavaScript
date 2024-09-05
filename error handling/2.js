try {
    setTimeout(function() {
        noSuchVariable;
    }, 1000);  // cause the it get executed after 1s and try catch block is already left form here
} catch(err) {
    alert("Don't works");
}

// It will works

setTimeout(() => {
try{
    noSuchVariable;
} catch(err){
    alert("Error is occurred");
}}, 1000);