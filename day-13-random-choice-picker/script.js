const choicesForm = document.getElementById('choices-form');
const choicesInput = document.getElementById('choices-input');
const choicesOutput = document.querySelector('.choices');
const btn = document.querySelector('button');

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

choicesInput.addEventListener('input', event => {  
  choicesOutput.innerHTML = generateChoices(event.target.value);
})
choicesInput.addEventListener("keypress", submitOnEnter);

choicesForm.addEventListener('submit', event => {  
  event.preventDefault();  
  chooseRandomChoice();
  choicesInput.value = '';  
})

function generateChoices(str) {
  let res = ''
  if (str.length) {    
    str.split(',').forEach(el => {
      res = res + `<div class="choice">${el}</div>`;
    });
  }  
  return res;  
}

async function chooseRandomChoice() {
  const choices = document.querySelectorAll('.choice');
  if (choices.length) {

    choices.forEach(el => {
      el.classList.remove('active');
    });
    // generate array of shufled choices array indexes
    const randArray = [...choices.keys()].sort(() => Math.random() - 0.5);    
    
    btn.disabled = true;
    choicesInput.placeholder = 'Wait for it...';

    for (const el of randArray) {
      choices[el].classList.add('active');
      await wait(300);
      if (el !== randArray[randArray.length - 1]) {
        choices[el].classList.remove('active');
      }
    }

    btn.disabled = false;
    choicesInput.placeholder = 'Enter new choices here...';
    
  }
}

function submitOnEnter(event){
  if(event.which === 13){
      event.target.form.dispatchEvent(new Event("submit", {cancelable: true}));
      event.preventDefault(); // Prevents the addition of a new line in the text field (not needed in a lot of cases)
  }
}
