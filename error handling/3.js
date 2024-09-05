// Error object

try {
    lala;
} catch(err){
    alert(err.name);
    alert(err.message);
    alert(err.stack);
    alert(err);
}

try {
    lala;
} catch {
    // not need information of error here
}