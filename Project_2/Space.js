const audio = document.getElementById("audio");
const button = document.getElementById("audioBtn");

button.onclick = function () {
    if (audio.paused) {
        audio.play();
        button.innerHTML = "⏸";
    } else {
        audio.pause();
        button.innerHTML = "▶";
    }
};
