import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const dateInput = document.getElementById('datetime-picker');
const startButton = document.querySelector('button');
startButton.disabled = true;
let selectedTime;
let intervalID;

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedTime = selectedDates[0].getTime();

    if (selectedTime - new Date().getTime() < 0) {
      alert('Please choose a date in the future');
      return;
    }

    startButton.disabled = false;
  },
});

function renderCountDown(selectedTime) {
  const leftTime = selectedTime - new Date().getTime();

  if (leftTime < 0) {
    clearInterval(intervalID);
    return;
  }

  const countDown = convertMs(leftTime);

  document.querySelector('[data-days=""]').textContent = addLeadingZero(
    countDown.days
  );
  document.querySelector('[data-hours=""]').textContent = addLeadingZero(
    countDown.hours
  );
  document.querySelector('[data-minutes=""]').textContent = addLeadingZero(
    countDown.minutes
  );
  document.querySelector('[data-seconds=""]').textContent = addLeadingZero(
    countDown.seconds
  );
}

startButton.addEventListener('click', () => {
  intervalID = setInterval(renderCountDown, 1000, selectedTime);
});

function addLeadingZero(value) {
  return value.toString().padStart(2, 0);
}

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
