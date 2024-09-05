let json = '{"age" : 30}';

try {
    let user = JSON.parse(json);
    alert(user.name); // no name! --> undefined
} catch(err) {
    alert("doesn't execute");
}