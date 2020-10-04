var lastScrollTop = 0;
var action = "stopped";
var timeout = 100;
// Scroll end detector:
$.fn.scrollEnd = function(callback, timeout) {    
	  $(this).scroll(function(){
		// get current scroll top 
	  	var st = $(this).scrollTop();
	    var $this = $(this);
	    // fix for page loads
		if (lastScrollTop !=0 )
  		{
  			// if it's scroll up
  			if (st < lastScrollTop){
				action = "scrollUp";
			} 
  			// else if it's scroll down
			else if (st > lastScrollTop){
				action = "scrollDown";
			}
		}
		// set the current scroll as last scroll top
		lastScrollTop = st;
		// check if scrollTimeout is set then clear it
	    if ($this.data('scrollTimeout')) {
	      clearTimeout($this.data('scrollTimeout'));
	    }
	    // wait until timeout done to overwrite scrolls output
	    $this.data('scrollTimeout', setTimeout(callback,timeout));
	});
};

$(window).scrollEnd(function(){
    if(action!="stopped"){
    	//call the event listener attached to obj.
    	$(document).trigger(action); 
    }
}, timeout);