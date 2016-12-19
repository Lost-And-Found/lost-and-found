window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 300,
        growOn = 600
    if (distanceY > shrinkOn) {
         jQuery("body").addClass("small_heading");
         jQuery(".wrapper__nav").addClass("header_small");
         jQuery(".nav--dark").addClass("nav__small");
         jQuery(".logo").addClass("logo_small");
         jQuery("#navcollectionlist").addClass("small_dropdown");
         jQuery("#navbrandlist").addClass("small_dropdown");
    } else if (distanceY < growOn ) {
        jQuery("body").removeClass('small_heading');
        jQuery(".wrapper__nav").removeClass('header_small');
        jQuery(".nav--dark").removeClass('nav__small');
        jQuery(".logo").removeClass('logo_small');
        jQuery("#navcollectionlist").removeClass("small_dropdown");
        jQuery("#navbrandlist").removeClass("small_dropdown");
    } else {
        console.log("werking?");
    }
});