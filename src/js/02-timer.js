import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
require('flatpickr/dist/themes/dark.css');

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  // daysOutput: document.querySelector('span[data-days]'),
  //hoursOutput: document.querySelector('span[data-hours]'),
  // minutesOutput: document.querySelector('span[data-minutes]'),
  ///secondsOutput: document.querySelector('span[data-seconds]'),
  valueOutput: document.querySelectorAll('.value'),
};

refs.startBtn.disabled = true;

class Countdown {
  constructor({ updateValueOnPage, stopCountdown }) {
    this.dateForTimer = null;
    this.isCountdownRun = false;
    this.countdownId = null;
    this.updateValueOnPage = updateValueOnPage;
    this.onStopCountdown = stopCountdown;
  }

  startCountdown() {
    refs.startBtn.disabled = true;
    this.isCountdownRun = true;
    this.countdownId = setInterval(() => {
      const leftTime = this.dateForTimer.getTime() - Date.now();
      this.onStopCountdown(leftTime, this.countdownId);
      const timer = convertMs(leftTime);
      // refs.daysOutput.textContent = addLeadingZero(days);
      // refs.hoursOutput.textContent = addLeadingZero(hours);
      // refs.minutesOutput.textContent = addLeadingZero(minutes);
      // refs.secondsOutput.textContent = addLeadingZero(seconds);
      const arrayFromSpan = [...refs.valueOutput];
      const timeValues = Object.values(timer);
      for (let i = 0; i < arrayFromSpan.length; i += 1) {
        this.updateValueOnPage(arrayFromSpan[i], timeValues[i]);
      }
    }, 1000);
  }
}

const myCountdown = new Countdown({
  updateValueOnPage: setValueInOutput,
  stopCountdown: stopCountdown,
});

refs.startBtn.addEventListener('click', () => myCountdown.startCountdown());

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (myCountdown.isCountdownRun) {
      return;
    }
    myCountdown.dateForTimer = selectedDates[0];
    if (myCountdown.dateForTimer <= Date.now()) {
      refs.startBtn.disabled = true;
      return Notify.failure('Please choose a date in the future', {
        width: '350px',
        position: 'center-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
        timeout: 4000,
      });
    }
    refs.startBtn.disabled = false;
  },
};

flatpickr('#datetime-picker', options);

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

function stopCountdown(time, countdown) {
  if (Math.floor(time / 1000) === 0) {
    clearInterval(countdown);
    myCountdown.isCountdownRun = false;
  }
}
