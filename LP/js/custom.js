
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);




  // 
  // 
  // 
  // 
  // 



//get all vids
var video =  document.querySelectorAll('video')

//add source to video tag
function addSourceToVideo(element, src) {
    var source = document.createElement('source');
    source.src = src;
    source.type = 'video/mp4';
	console.log(src);
    element.appendChild(source);
	
}

//determine screen size and select mobile or desktop vid
function whichSizeVideo(element, src) {
	var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
	if (windowWidth > 1200 ) {
		addSourceToVideo( element, src.dataset.desktopVid);
	} else {
		addSourceToVideo(element, src.dataset.mobileVid);
	}
}

//init only if page has videos
function videoSize() {
	if (video !== undefined) {
	video.forEach(function(element, index) {
			whichSizeVideo(  
				element, //element
				element  //src locations
			);	
		});
	}
}
videoSize();


//note IE11 polyfill needed for each, convert to for loop.



