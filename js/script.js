var elem = document.querySelector('.main-carousel');
var newElem = document.querySelector('.nav-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  prevNextButtons: false,
});


var flkty = new Flickity( newElem, {
  asNavFor: document.querySelector('.main-carousel'),
  cellAlign: 'left',
  contain: true,
});



