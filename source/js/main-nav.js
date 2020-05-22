var navMain = document.querySelector('.main-nav');
var button = document.querySelector('.page-header__nav-button');

button.classList.remove('visually-hidden');
navMain.classList.add('main-nav--hidden');
button.addEventListener('click', function() {
  navMain.classList.toggle('main-nav--hidden');
  button.classList.toggle('page-header__nav-button--close');
  button.classList.toggle('page-header__nav-button--opened');
});
