const modal = document.querySelector('.modal');
const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');

btnOpen.addEventListener('click', function () {
  modal.style.display = 'flex';
});

btnClose.addEventListener('click', function () {
  modal.style.display = 'none';
});
