'use strict';
//Declaration of variables
const btnsOpenModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
//Functions
const openBtn = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeBtn = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openBtn);
//console.log(btnsOpenModal);
closeModal.addEventListener('click', closeBtn);
overlay.addEventListener('click', closeBtn);
document.addEventListener('keydown', function (e) {
  //console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeBtn();
});
