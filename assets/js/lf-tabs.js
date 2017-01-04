// this the tabs function//
$(document).ready(function() {
    $('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
        // console.log(currentAttrValue);

        // Show/Hide Tabs
        // jQuery('.tab ' + currentAttrValue).show().siblings().hide();
        if (currentAttrValue === "#sizing") {
        	$("#sizing").addClass("active");
        	$("#shipping").removeClass("active");
        	$("#details").removeClass("hide");
        	$(".details-area").removeClass("active").addClass("hide");

        } else {
    		$("#details").addClass("active");
        }

      	if (currentAttrValue === "#shipping") {
	    	$("#shipping").addClass("active");
	    	$("#sizing").removeClass("active");
	    	$(".details-area").removeClass("active").addClass("hide");
    	} else {
    		$("#details").addClass("active");
    	}

          if (currentAttrValue === "#details") {
          	$("#details").addClass("active");
          	$(".details-area").removeClass("hide");
        	$(".details-area").addClass("active");
        	$("#shipping").removeClass("active");
        	$("#sizing").removeClass("active");
        }
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
});
