
const labels = document.querySelectorAll('label');

labels.forEach((label) => {
  label.innerHTML = (
    label.innerText
      .split('')
      .map((ch, idx) => `<span style="transition-delay: ${idx * 50}ms">${ch}</span>`)
      .join('')
  );  
});


