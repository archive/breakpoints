
(function(context) {

	var Breakpoints = function () {
	}

	var p = Breakpoints.prototype;

	p.init = function () {
		// body...
	}

	p._track = function () {
	    var onResize = function () {
	      var content = window
	          .getComputedStyle(document.body,':after')
	          .getPropertyValue('content');

	      var message = 'breakpoint !== match'  
	      if (content === "'Namespace.SomeBreakpointId'") {
	        message = 'breakpoint === match';
	      } 
	      document.getElementsByTagName('div')[0].innerHTML = message;
	    };

    	var debounce = null;
	    window.onresize = function (evt) {
	      // an ugly debouncer
	      if (debounce != null) {
	        clearTimeout(debounce);   
	      } 
	      debounce = setTimeout(onResize, 200);
	    }
	}

	Breakpoints.prototype.on = function() {
	  
	};

	context.Breakpoints = Breakpoints;

})(this);




