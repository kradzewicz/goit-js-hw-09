const form = document.querySelector('.form');
const firstDelay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');
const inputs = document.querySelectorAll('[type="number"]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  });
  return promise;
}

function promiseCreator(event) {
  event.preventDefault();

  const positions = [];
  for (let i = 1; i <= amount.value; i++) {
    positions.push(i);
  }

  setTimeout(() => {
    positions.forEach((position, index) => {
      setTimeout(() => {
        const delay = parseInt(firstDelay.value) + parseInt(step.value * index);
        createPromise(position, delay)
          .then(resolved => console.log(resolved))
          .catch(rejected => console.log(rejected));
        if (positions.length === position) {
          inputs.forEach(input => {
            input.value = '';
          });
        }
      }, step.value);
    });
  }, firstDelay.value);
}

form.addEventListener('submit', promiseCreator);
