
const $ = jQuery;

function eventHandler() {


	//sliders
	let sliders = document.querySelectorAll(".carusel-block");
	for (let el of sliders) {
		let currSlider = new Swiper(el.querySelector('.carusel-block__slider--js'), {
			slidesPerView: 'auto',
			spaceBetween: 30,

			lazy: {
				loadPrevNext: true,
			},
			watchOverflow: true,

			navigation: {
				nextEl: el.querySelector('.swiper-button-next'),
				prevEl: el.querySelector('.swiper-button-prev'),
			},
			pagination: {
				el: el.querySelector('.swiper-pagination'),
				type: 'bullets',
				clickable: true,
			},
		});
	}

};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }