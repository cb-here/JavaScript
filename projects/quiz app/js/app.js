let questions = [
    {
        'que' : "What is my name?",
        'a': 'Hello World',
        'b' : 'Joker',
        'c' : 'Walter White',
        'd' : 'Peter',
        'correct' : 'a'
    },
    {
        'que' : "What is my name?",
        'a': 'Hello World',
        'b' : 'Joker',
        'c' : 'Walter White',
        'd' : 'Peter',
        'correct' : 'a'
    },
    {
        'que' : "What is my name?",
        'a': 'Hello World',
        'b' : 'Joker',
        'c' : 'Walter White',
        'd' : 'Peter',
        'correct' : 'a'
    },
];
let questionBox = document.getElementById('question');
let index = 0;
let inputs = document.querySelectorAll('.options');
function loadQuestion() {
    if (index == total) {
        return end();
    }
    reset();


    let data = questions[index];
    questionBox.innerHTML = `${index + 1}. ${data.que}`;
    inputs[0].nextElementSibling.innerHTML = data.a;
    inputs[1].nextElementSibling.innerHTML = data.b;
    inputs[2].nextElementSibling.innerHTML = data.c;
    inputs[3].nextElementSibling.innerHTML = data.d;
}

let total = questions.length;
let right = 0,
wrong = 0;
let submitQuiz = () => {
    let data = questions[index];
    let ans = getAns();
    if(ans == data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
function getAns() {
    inputs.forEach(input => {
        if (input.checked) {
            return input.value;
        }
    })
}
btn.onclick = function() {
    submitQuiz();
}
loadQuestion();
function reset() {
    inputs.forEach(input => {
        input.checked = false;
    })
}
function end() {
    document.getElementById('box').innerHTML = `<h2>Thanks</h2>`;
    
}