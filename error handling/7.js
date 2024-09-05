// rethrowing 

let json = '{"age" : 30}';

try {
    user = JSON.parse(json); // forget let 
} catch(err){
    if(err instanceof ReferenceError){
        console.log("ReferenceError")
    }
}

try {
    let user = JSON.parse(json);
    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name");
    }
    alert(user.name);
    lalala;
} catch(err){
    if (err.name == "SyntaxError") {
        alert("JSON error: " + err.message);
    } 
    else {
        throw err;
    }
}


function readData() {
    try {
        // ....
        blabla;
    } catch(err) {
        if (!(err instanceof SyntaxError)) {
            throw err;
        }
    }
}

try {
    readData();
} catch(err){
    alert("External catch got: " + err);
}