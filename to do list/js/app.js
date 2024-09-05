let box = document.querySelector('.box');
let row = document.querySelector('.row');
let taskName = document.getElementById('task-name');
let task = document.getElementById('task');

let cross = document.getElementById('cross');
cross.onclick = function() {
    row.remove();
}

let sign = document.getElementById('sign');
sign.onclick = function() {
    task.style.color = "green";
}

taskName.onkeydown = function(event){
    if(event.key == "Enter"){
        let div = document.createElement('div');
        div.innerHTML = taskName.value;
        div.classList.add('row');
        box.append(div);
        taskName.value="";
    }
}