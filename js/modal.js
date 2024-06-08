$(document).ready(function(){
	/*Открыть модальное окно*/
	$('.imdiz-open').click(function(){
		$('.imdiz-overlay').css({'visibility': 'visible', 'opacity': 1});
		$('.imdiz-modal').css({'visibility': 'visible', 'opacity': 1});
	});
	/*Закрыть модальное окно*/
	$('.imdiz-close').click(function(){
		$('.imdiz-overlay').css({'visibility': 'hidden', 'opacity': 0});
		$('.imdiz-modal').css({'visibility': 'hidden', 'opacity': 0});
	});
});