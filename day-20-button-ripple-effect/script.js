const btn = document.querySelector('.btn');
let timeOutId = 0;

btn.addEventListener('click', e => {
  const left = e.clientX - e.target.offsetLeft;
  const top = e.clientY - e.target.offsetTop;

  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.left = `${left}px`;
  circle.style.top = `${top}px`;

  e.target.appendChild(circle);
  timeOutId = setTimeout(() => circle.remove(), 500);
});

