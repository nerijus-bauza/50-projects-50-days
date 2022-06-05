const nav = document.getElementById('nav');
const toggle = document.getElementById('toggle');
const links = document.querySelectorAll('.nav__link');

toggle.addEventListener('click', () => {
  // toggle class expanded on click
  nav.classList.toggle('expanded');

  // make nav links tabable when in expanded mode
  if (nav.classList.contains('expanded')) {
    links.forEach(link => link.tabIndex = 0);
  } else {
    links.forEach(link => link.tabIndex = -1);
  }
  
});