const buttons = document.querySelectorAll('.btn');
const audio = new Audio();

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('stop')) {
            audio.pause();
            audio.currentTime = 0; // Reset the audio to start
        } else {
            audio.src = button.getAttribute('data-sound');
            audio.play().catch(error => {
                console.error('Error playing audio:', error);
            });
        }
    });
});
