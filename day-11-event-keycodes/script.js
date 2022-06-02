const start = document.querySelector('.start');
const display = document.querySelectorAll('.display');

const eventKey = document.getElementById('eventKey');
const eventKeyCode = document.getElementById('eventKeyCode');
const eventCode = document.getElementById('eventCode');

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  start.classList.add('hide');
  start.classList.remove('show');
  display.forEach(el => {
    el.classList.remove('hide');
    el.classList.add('show');
  });

  eventKey.innerHTML = event.key;
  eventKeyCode.innerHTML = event.keyCode;
  eventCode.innerHTML = event.code;
});