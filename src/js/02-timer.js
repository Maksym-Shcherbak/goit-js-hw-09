import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
require('flatpickr/dist/themes/dark.css');

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  // daysOutput: document.querySelector('span[data-days]'),
  //hoursOutput: document.querySelector('span[data-hours]'),
  // minutesOutput: document.querySelector('span[data-minutes]'),
  ///secondsOutput: document.querySelector('span[data-seconds]'),
  valueOutput: document.querySelectorAll('.value'),
};
let dateForTimer = null;
refs.startBtn.disabled = true;
let isCountdownRun = false;

let timerId = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (isCountdownRun) {
      return;
    }
    dateForTimer = selectedDates[0];
    if (dateForTimer <= Date.now()) {
      return Notiflix.Notify.warning('Please choose a date in the future');
    }
    refs.startBtn.disabled = false;
  },
};

flatpickr('#datetime-picker', options);

refs.startBtn.addEventListener('click', onStartTimer);

function onStartTimer() {
  refs.startBtn.disabled = true;
  isCountdownRun = true;
  timerId = setInterval(() => {
    const leftTime = dateForTimer.getTime() - Date.now();
    const timer = convertMs(leftTime);
    // refs.daysOutput.textContent = addLeadingZero(days);
    // refs.hoursOutput.textContent = addLeadingZero(hours);
    // refs.minutesOutput.textContent = addLeadingZero(minutes);
    // refs.secondsOutput.textContent = addLeadingZero(seconds);
    const arrayFromSpan = [...refs.valueOutput];
    const timeValues = Object.values(timer);
    for (let i = 0; i < arrayFromSpan.length; i += 1) {
      setValueInOutput(arrayFromSpan[i], timeValues[i]);
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function setValueInOutput(elem, value) {
  elem.textContent = addLeadingZero(value);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
