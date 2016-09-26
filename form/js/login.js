// Function to load a script file on an event callback
function loadScript( url, callback) {
	
	// Adding the script tag to head
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = url;

	// Bind the event to a callback
	script.onreadystatechange = callback;
	script.onload = callback;

	// Fire the loading
	head.appendChild(script);
}

var includeJs = function() {
	// do anything here
}

loadScript('js/object.js', includeJs);

