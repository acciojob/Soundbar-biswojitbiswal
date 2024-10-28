// Get the audio element
const audio = document.getElementById('audio');

// Get all buttons with the class 'btn'
const buttons = document.querySelectorAll('.btn');

// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundFile = button.getAttribute('data-sound');
        audio.src = soundFile;
        audio.play().catch(error => {
            console.error('Error playing audio:', error);
        });
    });
});

// Add click event listener to the stop button
document.querySelector('.stop').addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0; // Reset to the start
});
