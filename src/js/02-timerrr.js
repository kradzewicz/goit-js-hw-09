import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const timePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() <= options.defaultDate.getTime()) {
      window.alert('Please choose date in future!');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};

const flatPicker = flatpickr(timePicker, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(count) {
  count.days = String(count.days).padStart(2, '0');
  count.hours = String(count.hours).padStart(2, '0');
  count.minutes = String(count.minutes).padStart(2, '0');
  count.seconds = String(count.seconds).padStart(2, '0');
}

function startCounting() {
  timePicker.nextSibling.disabled = true;
  startBtn.disabled = true;
  const futureDate = flatPicker.selectedDates[0].getTime();

  function countingValue() {
    const todayDate = new Date().getTime();
    const timeDiffer = futureDate - todayDate;
    const dateDiffer = convertMs(timeDiffer);

    addLeadingZero(dateDiffer);

    days.textContent = dateDiffer.days;
    hours.textContent = dateDiffer.hours;
    minutes.textContent = dateDiffer.minutes;
    seconds.textContent = dateDiffer.seconds;

    if (timeDiffer <= 0) {
      days.textContent = '00';
      hours.textContent = '00';
      minutes.textContent = '00';
      seconds.textContent = '00';
      clearInterval(counting);
    }
  }

  const counting = setInterval(countingValue, 1000);

  countingValue();
}

startBtn.addEventListener('click', startCounting);
