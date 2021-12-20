'use strict';

// add an onclick event listener for each button
// on click, show the modal, show the background blur

// add an onclick event listener for the background blur and modal close button
// on click, hide the modal, hide the background blur

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`);

for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].textContent);
}

console.log(btnsOpenModal);
