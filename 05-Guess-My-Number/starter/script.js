'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;
const changeText = function (queryClass, queryText) {
  document.querySelector(queryClass).textContent = queryText;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess);

  if (!guess) {
    changeText(`.message`, `No number :/`);
  } else if (guess === secretNumber) {
    changeText(`.message`, `Correct number!!`);
    changeText(`.number`, secretNumber);

    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highscore) {
      highscore = score;
      changeText(`.highscore`, highscore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      changeText(
        `.message`,
        `${guess > secretNumber ? `Too high...` : `Too low...`}`
      );
      score--;
      changeText(`.score`, score);
    } else {
      changeText(`.score`, 0);
      changeText(`.message`, `YOU LOSE :(`);
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  changeText(`.score`, score);
  changeText(`.message`, `Start guessing...`);
  changeText(`.number`, `?`);
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
