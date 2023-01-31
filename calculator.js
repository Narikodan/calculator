var audio1 = new Audio("beep.mp3");
var audio = new Audio("beep3.mp3");
var audio2 = new Audio("btn4.mp3");
var audio3 = new Audio("oprtr.mp3");
let screen = document.getElementById("screen");

function clr() {
    screen.value = ""
audio2.play();
}

function btnClk(value) {
screen.value += value;
audio1.play();
}

function optrbtnClk(value) {
    screen.value += value;
    audio3.play();
    }
function findResult() {
screen.value = eval(screen.value);
audio.play();
}