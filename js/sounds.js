const correct = new Audio();
correct.src = "./sounds/correct.mp3";
const wrong = new Audio();
wrong.src = "./sounds/Fail.mp3";
const win = new Audio();
win.src = "./sounds/Winner.mp3";
const game = new Audio();
game.src = "./sounds/game.mp3";
//mute unmute
const volume = document.querySelector("i");
volume.addEventListener("", () => {
    if(volume.classList.contains("")) {
        volume.classList.remove("");
        volume.classList.add("");
        game.pause();
    } else {
        volume.classList.remove("");
        volume.classList.add("");
        game.play();
    }
}
)