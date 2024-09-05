let json = '{"bad json"}';

try {
    let user = JSON.parse(json);
    alert(user.name); 
} catch(err) {
    alert("Our apologies.The data requested is not get");
    alert(err.name);
    alert(err.message);
}