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

var minutes = document.getElementById('minutes')

flkty.on('change', function(index){
	console.log('Flickity change ' + index)
	switch (index) {
		case 0:
			minutes.innerHTML = '40'
			break;
		case 1:
			minutes.innerHTML = '25'
			break;
		case 2:
			minutes.innerHTML = '75'
			break;
		default:
			break;
	}
})



