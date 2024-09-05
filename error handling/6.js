// throwing our own error

let error = new Error("Things happen o_o");
alert(error.name); // Error
alert(error.message); // Things happen o_o

try {
    let user = JSON.parse("{ bad json ...}");
} catch(err){
    console.log(err.name);
    console.log(err.message);
}

let json = '{"age" : 30}';

try {
    let user = JSON.parse(json);
    if(!user.name){
        throw new SyntaxError("User name not found");
    }
    alert(user.name);
} catch(err) {
    alert("Json message: " + err.message);
}