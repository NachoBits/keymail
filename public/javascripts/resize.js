var addEvent = function(elem, type, eventHandle) {
    if (elem == null || typeof(elem) == 'undefined') return;
    if ( elem.addEventListener ) {
        elem.addEventListener( type, eventHandle, false );
    } else if ( elem.attachEvent ) {
        elem.attachEvent( "on" + type, eventHandle );
    } else {
        elem["on"+type]=eventHandle;
    }
};


function tintBg() {
    var currentWidth = $(window).width();
    currentWidth = currentWidth > 1920 ? 1920 : (currentWidth < 600 ? 600 : currentWidth);
    var opacity = (1920.0 - currentWidth) / 1920.0;
    var val = 'linear-gradient(rgba(0, 0, 0,' + opacity + '), rgba(0, 0, 0, ' + opacity + '))';
    $('body').css({background: val});
}


addEvent(window, 'resize', tintBg);

$( document ).ready(function() {
   tintBg();
});