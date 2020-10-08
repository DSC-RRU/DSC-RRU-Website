$(document).ready(function(){
    $(".but1").click( function(){
        $(window).scrollTop(0);
    });
});


window.console = window.console || function(t) {};
  if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
  }

