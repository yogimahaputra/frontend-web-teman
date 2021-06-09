var menu = document.getElementById("menu");

if(menu){
  menu.innerHTML = '<i class="fas fa-bars"></i>'
}


var elem = document.querySelector('.main-carousel');
if(elem){
  var flkty = new Flickity( elem, {
    // options
    cellAlign: 'left',
    contain: true
  });
}

var elem = document.querySelector('.second-carousel');
if(elem){
  var flkty = new Flickity( elem, {
    // options
    cellAlign: 'left',
    contain: true
  });
}