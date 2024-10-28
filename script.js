//your JS code here. If required.
const audio = document.getElementById('audio');

const buttons = document.querySelectorAll('.btn');


buttons.forEach(button => {
    button.addEventListener('click', () => {

        const soundFile = button.getAttribute('data-sound');

        audio.src = soundFile;
        audio.play();
    });
});


document.querySelector('.stop').addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});
