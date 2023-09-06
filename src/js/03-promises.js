const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const amount = Number(form.elements.amount.value);
  let delay = Number(form.elements.delay.value);
  const step = Number(form.elements.step.value);

  for (let i = 0; i < amount; i += 1) {
    let position = i + 1;
    delay = delay + step;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`Rejected promise ${position} in ${delay}ms`);
      });
  }

  form.reset();
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
