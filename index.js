document.querySelector('.dancer').addEventListener('click', function() {
  document.querySelector('.dancer').classList.toggle('about');
  document.querySelector('.paint').classList.toggle('hidepaint');
  document.querySelector('.mural').classList.toggle('hidemural');
  document.querySelector('.actor').classList.toggle('hideactor');
  window.body
});

document.querySelector('.paint').addEventListener('click', function() {
  document.querySelector('.paint').classList.toggle('calendar');
  document.querySelector('.dancer').classList.toggle('hidedancer');
  document.querySelector('.mural').classList.toggle('hidemural');
  document.querySelector('.actor').classList.toggle('hideactor');
  window.body
});