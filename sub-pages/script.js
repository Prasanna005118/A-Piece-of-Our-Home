document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('button[data-sound]');

  buttons.forEach(button => {
    const soundPath = button.getAttribute('data-sound');
    const audio = new Audio(soundPath);
    let isPlaying = false;

    button.addEventListener('click', () => {
      if (isPlaying) {
        audio.pause();
        isPlaying = false;
        button.textContent = 'Play'; // Change button text to 'Play'
      } else {
        audio.play();
        isPlaying = true;
        button.textContent = 'Pause'; // Change button text to 'Pause'
      }
    });
  });
});