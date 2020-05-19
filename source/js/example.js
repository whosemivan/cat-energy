var image_before = document.querySelector('.example__image--before');
var image_after = document.querySelector('.example__image--after');
var bar = document.querySelector('.example__bar');
var toggle = document.querySelector('.example__toggle');
var docWidth = document.body.clientWidth;
var tabletWidth = 768;

if (docWidth < tabletWidth) {
bar.addEventListener('click', function() {
  toggle.classList.toggle('example__toggle--active');
  image_before.classList.toggle('visually-hidden');
  image_after.classList.toggle('visually-hidden');
});
}

if (docWidth >= tabletWidth) {
  image_after.classList.remove('visually-hidden');
}
