'use strict';

// console.log(document.querySelector(`.message`).textContent);
// document.querySelector(`.message`).textContent = `Correct Number!!!`;
// console.log(document.querySelector(`.message`).textContent);

// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 10;

// document.querySelector(`.guess`).value = 23;
// console.log(document.querySelector(`.guess`).value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(secretNumber);

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess);

  // No input
  if (!guess) {
    document.querySelector(`.message`).textContent = `No number :/`;

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `Correct number!!`;
    document.querySelector(`.number`).textContent = secretNumber;

    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Too high...`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(`.message`).textContent = `YOU LOSE :(`;
    }

    // When guess is too love
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Too low...`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(`.message`).textContent = `YOU LOSE :(`;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
