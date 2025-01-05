function makeBubble() {
    var clutter = "";
    for (var i = 0; i < 85; i++) {
        const lucky = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${lucky}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}
makeBubble();

var timer = 60;
function runTimer() {
    let interval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").innerHTML = timer;
        } else {
            clearInterval(interval);
            document.querySelector("#timer").innerHTML = "End";
        }
    }, 1000);
}
runTimer();

var hit;
function hitNumb() {
    hit = Math.floor(Math.random() * 10);
    document.querySelector("#hit").innerHTML = hit;
}
hitNumb();

var score = 0;
function scoreIncrement() {
    score += 10;
    document.querySelector("#score").innerHTML = score;
}


document.querySelector("#pbtm").addEventListener("click", function (event) {
    if (event.target.classList.contains("bubble")) { 
        if (hit === Number(event.target.textContent)) {
            scoreIncrement();
            hitNumb();  
            makeBubble(); 
        }
    }
});
