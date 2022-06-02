const sounds = document.querySelectorAll('audio');
const container = document.querySelector('.container');

sounds.forEach(sound => {
  const soundButton = document.createElement('button');
  soundButton.innerText = sound.id;
  soundButton.addEventListener('click', () => {
    stopSounds();
    sound.play();
  });
  container.appendChild(soundButton);
});


function stopSounds() {
  sounds.forEach(sound => {
    sound.pause();
    sound.currentTime = 0;
  });
}