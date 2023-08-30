	
var panels = jQuery('.has-sub-menu .sub-menu');
panels.hide(); 
jQuery('.has-sub-menu > a').click(function() {
	var headingBtn = jQuery(this);
	var activePanel = jQuery(this).next(panels); 
	jQuery('.has-sub-menu > a').removeClass('active');
	headingBtn.addClass('active');
	if ( activePanel.is(':visible')) {
		activePanel.slideUp('slow').removeClass('active'); 	
		headingBtn.removeClass('active');
	}
	else {
		panels.slideUp('slow').removeClass('active');
		activePanel.slideDown('slow').addClass('active'); 
	}
});