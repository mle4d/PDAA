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

document.querySelector('.mural').addEventListener('click', function() {
  document.querySelector('.mural').classList.toggle('scholarship');
  document.querySelector('.dancer').classList.toggle('hidedancer');
  document.querySelector('.paint').classList.toggle('hidepaint');
  document.querySelector('.actor').classList.toggle('hideactor');
  window.body
});

document.querySelector('.actor').addEventListener('click', function() {
  document.querySelector('.actor').classList.toggle('support');
  document.querySelector('.dancer').classList.toggle('hidedancer');
  document.querySelector('.paint').classList.toggle('hidepaint');
  document.querySelector('.mural').classList.toggle('hidemural');
  window.body
});