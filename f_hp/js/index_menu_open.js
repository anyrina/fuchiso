jQuery(function(){

	var header = jQuery('#header');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 760) { //スクロールが10pxを越えたら
			header.addClass('invert');
		} else { //スクロールが500pxを越えなければ
			header.removeClass('invert');
		}
	})});
