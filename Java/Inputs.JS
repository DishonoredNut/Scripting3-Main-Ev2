

var audio = document.getElementById("sound");
var currentlyPlaying = false;

var audio = document.getElementById("sound1");
var currentlyPlaying = false;

var audio = document.getElementById("sound2");
var currentlyPlaying = false;

function playSound() {
    if (!currentlyPlaying) {
        audio.play();
        currentlyPlaying = true;
    }
}

function stopSound() {
    if (currentlyPlaying) {
        audio.pause();
        audio.currentTime = 0;
        currentlyPlaying = false;
    }
}

document.addEventListener("keypress", function(event) {
    if (event.key === "w") {
        playSound();
    } else if (event.key === "s") {
        stopSound();
    }
});

function playSound1() {
    if (!currentlyPlaying) {
        audio.play();
        currentlyPlaying = true;
    }
}

function stopSound1() {
    if (currentlyPlaying) {
        audio.pause();
        audio.currentTime = 0;
        currentlyPlaying = false;
    }
}

document.addEventListener("keypress", function(event) {
    if (event.key === "w") {
        playSound1();
    } else if (event.key === "s") {
        stopSound1();
    }
});