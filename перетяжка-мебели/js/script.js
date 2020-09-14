jQuery(document).ready(function($) {
	// ----Договор----
	var toggleContract = function() {
		$('body').toggleClass('bodyHidden');
		$(".contract-popup").toggleClass('contract-popup-active');
	}

	$(".garant-img-wrap").click(toggleContract);
	$(".contract-popup-clous").click(toggleContract);

	// ------popup--------

	var tooglePopup = function() {
		$('body').toggleClass('bodyHidden');
		$(".popup-wrap").toggleClass('popup-wrap-active');
		$(".popup-box").toggleClass('popup-box-active');
	}

	$(".phone-callback").click(tooglePopup);
	$(".popup-clous").click(tooglePopup);
	$(".offer-btn").click(tooglePopup);
	$(".contacts-btn").click(tooglePopup);
	$(".prise-cta-link").click(tooglePopup);


	// ------Слайдер Мастерской---------

	$('.dom-slider-box').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		prevArrow: $(".dom-arrow-block-left"),
		nextArrow: $(".dom-arrow-block-right"),
	});

	// ------Слайдер Проектов---------

	$('.project-slider-wrap').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		prevArrow: $(".project-slider-arrow-btn-left"),
		nextArrow: $(".project-slider-arrow-btn-right"),
	});

	// --------Согласие----------

	var togglePoliticDom = function() {
		$(".dom-done-form-bg").toggleClass('dom-done-form-bg-active');
	}

	$(".dom-done-form-box").click(togglePoliticDom);

	var togglePoliticPopup = function() {
		$(".popup-done-form-bg").toggleClass('popup-done-form-bg-active');
	}

	$(".popup-done-form-box").click(togglePoliticPopup);
});