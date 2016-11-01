/*
	Custom protocol handler support
	//developers.whatwg.org/timers.html#custom-handlers
	
	Added by @benschwarz
*/

Modernizr.addTest('customprotocolhandler', function () {
    return !!navigator.registerProtocolHandler;
});
