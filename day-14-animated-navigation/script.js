const nav = document.getElementById('nav');
const toggle = document.getElementById('toggle');
const links = document.querySelectorAll('.nav__link');

toggle.addEventListener('click', () => {
  nav.classList.toggle('expanded');
  if (nav.classList.contains('expanded')) {
    links.forEach(link => link.tabIndex = 0);
  } else {
    links.forEach(link => link.tabIndex = -1);
  }
  
});