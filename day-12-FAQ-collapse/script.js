const icons = document.querySelectorAll('i');

icons.forEach(icon => {
  
  icon.addEventListener('click', event => {
    event.target.classList.toggle('fa-angle-down');
    event.target.classList.toggle('fa-circle-xmark');
    event.target.parentNode.classList.toggle('expanded');
  });
});

