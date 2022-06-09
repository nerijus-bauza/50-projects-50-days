const glassesContainer = document.querySelector('.glasses');
const goalInput = document.getElementById('goal');

const percentage = document.querySelector('.percentage');
const remained = document.querySelector('.remained');
const remainedQuantity = document.querySelector('.remained-quantity');

let totalGlasses = goalInput.value / 0.25;
let drankGlasses = 0;

generateGlasses(totalGlasses);
fillGlassMeter(drankGlasses, totalGlasses);

goalInput.addEventListener('change', (event) => {
  totalGlasses = round(goalInput.value, 0.25) / 0.25;
  generateGlasses(totalGlasses);
  fillGlassMeter(drankGlasses, totalGlasses); 
});

function generateGlasses(num) {
  glassesContainer.innerHTML='';
  for (let i = 1; i <= num; i++) {
    const glass = document.createElement('div');
    glass.innerText = '250 ml';
    glass.classList.add('glass');
    if (i <= drankGlasses) { glass.classList.add('active'); }
    glass.setAttribute('data-glassNum', i.toString());
    glass.addEventListener('click', (event) => {
      fillGlasses(event);
    })
    glassesContainer.appendChild(glass);
  }  
}

function fillGlasses(e) {
  // number of selected glass:  
  drankGlasses = +e.target.getAttribute('data-glassNum');
  // if selected glass is active and the next one is not, then deactivate selected glass
  if (e.target.classList.contains('active') && !e.target.nextElementSibling.classList.contains('active')) {
    drankGlasses--;
  }
  // mark as active required number of glasses
  const glasses = document.querySelectorAll('.glass');  
  glasses.forEach(glass => {
    glass.classList.remove('active');
    if (+glass.getAttribute('data-glassNum') <= drankGlasses) {
      glass.classList.add('active');
    }
  });  
  fillGlassMeter(drankGlasses, totalGlasses);
}

function fillGlassMeter(drunk, total) {
  // change height and text of percentage
  percentage.style.height = `${drunk / total * 100}%`;
  percentage.innerText = `${Math.floor(drunk / total * 100)}%`;  
  // change height and text of remained
  remained.style.height = `${(total - drunk) / total * 100}%`;
  remainedQuantity.innerText = `${(total - drunk) * 0.25}L`;
  
}

// helper function round value to nearest step of step
function round(value, step) {
  step || (step = 1.0);
  var inv = 1.0 / step;
  return Math.round(value * inv) / inv;
}