var navMain = document.querySelector('.main-nav');
var button = document.querySelector('.page-header__nav-button');

button.addEventListener('click', function() {
  navMain.classList.toggle('main-nav--block');
  button.classList.toggle('page-header__nav-button--close');
  button.classList.toggle('page-header__nav-button--opened');
});
