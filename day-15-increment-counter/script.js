const counters = document.querySelectorAll('.counter');

const increment = Math.ceil(Math.max(...[...counters].map(counter => +counter.getAttribute('data-target'))) / 400);

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const counterValue = +counter.innerText;

    if (counterValue < target) {
      counter.innerText = counterValue + increment;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }

  };
  updateCounter();

});