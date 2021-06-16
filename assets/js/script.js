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

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
