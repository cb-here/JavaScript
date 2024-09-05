let endDate = "19 August 2024 6:00 PM";
document.getElementById('endDate').innerHTML = endDate;
const inputs = document.querySelectorAll('input');
function clock() {
    let end = new Date(endDate);
    let now = new Date();
    let diff = (end - now) / 1000;
    if (diff < 0) return;
    let days = Math.floor(diff / 86400);
    inputs[0].value = days;
    let hours = Math.floor(diff / 3600) % 24;
    inputs[1].value = hours;
    let minutes = Math.floor(diff / 60) % 60;
    inputs[2].value = minutes;
    let seconds = Math.floor(diff % 60);
    inputs[3].value = seconds;
}
setInterval(clock, 1000);