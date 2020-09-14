jQuery(document).ready(function($) {
	$(".prise-cta-link").click(function(evt) {
		evt.preventDefault();
	});
	
	$(".feedback-slider").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: $(".feedback-arrow-left"),
		nextArrow: $(".feedback-arrow-right"),

		responsive: [
		    {
		      breakpoint: 1000,
		      settings: {
		        slidesToShow: 1
		      }
		    }
		  ]
	});

	var 
		priseTable = $(".prise-table"),
		heightOneCategorie = priseTable.eq(0).height(),
		priseBox = $(".prise-box");

	priseBox.css("height", heightOneCategorie);

	var 
		priseBtn = $("#prise-hidden"),
		priseHeight = 0;

	var visiblePrise = function() {
		priseTable.each(function(index, el) {
			priseHeight = priseHeight + priseTable.eq(index).height();
		});

		priseBox.css("height", priseHeight);

		priseBtn.addClass('prise-btn-click');
	}

	priseBtn.click(visiblePrise);


	// Вопросы

	var 
		faqHead = $(".faq-head");

	var toggleFaq = function() {
		$(".faq-text-box").removeClass('faq-a');
		$(".faq-text-box").css("height", 0);

		if ( $(this).parents(".faq-block").find('.faq-text-box').height() > 0 ){}

		else {
			var 
				faqTextHeight = $(this).parents(".faq-block").find('.faq-text').height() + parseInt($(this).parents(".faq-block").find('.faq-text').css("padding-top")) + parseInt($(this).parents(".faq-block").find('.faq-text').css("padding-bottom")),
				faqTextBox = $(this).parents(".faq-block").find('.faq-text-box');


			
			faqTextBox.addClass('faq-a');
			faqTextBox.css("height", faqTextHeight);
		}
	}

	faqHead.click(toggleFaq);


});