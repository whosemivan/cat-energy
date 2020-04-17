var navMain = document.querySelector('.main-nav');
var button = document.querySelector('.page-header__nav-button');



button.addEventListener('click', function() {
  if (button.classList.contains('page-header__nav-button--close')) {
    navMain.classList.remove('main-nav--hide');
    button.classList.remove('page-header__nav-button--close');
    button.classList.add('page-header__nav-button--opened');
  } else if (button.classList.contains('page-header__nav-button--opened')) {
    navMain.classList.add('main-nav--hide');
    button.classList.remove('page-header__nav-button--opened');
    button.classList.add('page-header__nav-button--close');
  }
});
