const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

function toggleShowNavClass() {
  container.classList.toggle('show-nav');
}

open.addEventListener('click', toggleShowNavClass);
close.addEventListener('click', toggleShowNavClass);