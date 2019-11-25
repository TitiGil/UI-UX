 /* event is different in various browser /*
 
 var mouseevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";
 
 
 window.addEventListener(mouseevt, scrolling);
 
 /* find that is scrolling up or down */
 function scrolling(){
  var evt = window.event || e;
        var kind = evt.detail || evt.wheelDelta * (-1);
      kind < 0 ? $(".header").slideDown() : $(".header").slideUp();
 }
