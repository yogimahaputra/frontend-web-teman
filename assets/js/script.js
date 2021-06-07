var menu = document.getElementById("menu");

menu.innerHTML = '<i class="fas fa-bars"></i>'


var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

var elem = document.querySelector('.second-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});