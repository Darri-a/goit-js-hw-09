const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let intervalID;

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  console.log(startButton);
  intervalID = setInterval(changeBodyColor, 1000);
});

stopButton.addEventListener('click', () => {
  startButton.disabled = false;
  console.log(stopButton);
  clearInterval(intervalID);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBodyColor() {
  const color = getRandomHexColor();
  document.querySelector('body').style.backgroundColor = color;
}
