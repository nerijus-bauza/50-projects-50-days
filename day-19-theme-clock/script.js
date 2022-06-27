const timeCont = document.getElementById('time');
const dateWordsCont = document.getElementById('dateWords');
const dateDayCont = document.getElementById('dateNum');

const hoursArr = document.querySelector('.hours');
const minutesArr = document.querySelector('.minutes');
const secondsArr = document.querySelector('.seconds');

const locale = [];

const btn = document.getElementById('modeBtn');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  btn.innerText = document.body.classList.contains('dark') ? 'Light mode' : 'Dark mode';
});

updateTime();

setInterval(updateTime, 1000);

function updateTime() {
  const currentTime = new Date();
  const todaysZero = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), 0, 0, 0);
  const secondsAfter = Math.floor((currentTime.getTime() - todaysZero.getTime()) / 1000);
  const minutesAfter = Math.floor(secondsAfter / 60);
  const hoursAfter = Math.floor(minutesAfter / 60) % 12;

  timeCont.innerText = currentTime.toLocaleTimeString(locale, { timeStyle: 'medium' });
  dateWordsCont.innerText = 
    currentTime.toLocaleDateString(locale, { weekday: 'short' }).toUpperCase() + 
    ', ' +
    currentTime.toLocaleDateString(locale, { month: 'long' }).toUpperCase();
  dateDayCont.innerText = currentTime.toLocaleDateString(locale, { day: '2-digit' }).toUpperCase();

  hoursArr.style.transform = `rotate(${hoursAfter * 30 - 90}deg)`;
  minutesArr.style.transform = `rotate(${minutesAfter * 6 - 90}deg)`;
  secondsArr.style.transform = `rotate(${secondsAfter * 6 - 90}deg)`;
}

