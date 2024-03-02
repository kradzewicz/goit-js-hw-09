const form = document.querySelector('.form');
const firstDelay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');
const inputs = document.querySelectorAll('[type="number"]');
const submitBtn = document.querySelector('form button');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position + 1} in ${delay}ms`);
    } else {
      reject(`❌ Rejected promise ${position + 1} in ${delay}ms`);
    }
  });
  return promise;
}

function promiseCreator(event) {
  event.preventDefault();

  submitBtn.disabled = 'true';
  inputs.forEach(input => {
    input.disabled = 'true';
  });

  let position = 0;
  let timerId = null;

  setTimeout(() => {
    timerId = setInterval(() => {
      const delay =
        parseInt(firstDelay.value) + parseInt(step.value * position);

      createPromise(position, delay)
        .then(resolved => console.log(resolved))
        .catch(rejected => console.log(rejected));

      if (position >= amount.value - 1) {
        clearInterval(timerId);
        inputs.forEach(input => {
          input.value = '';
          input.toggleAttribute('disabled');
        });
        submitBtn.toggleAttribute('disabled');
      }
      position++;
    }, step.value);
  }, firstDelay.value);
}

form.addEventListener('submit', promiseCreator);
