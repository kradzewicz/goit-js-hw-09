const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
startBtn.disabled = false;
stopBtn.disabled = true;

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.toggleAttribute('disabled');
  stopBtn.toggleAttribute('disabled');
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.toggleAttribute('disabled');
  stopBtn.toggleAttribute('disabled');
});
