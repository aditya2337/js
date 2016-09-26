function list() {
	this.li = document.getElementsByTagName('li')[2];
	this.ul = document.getElementsByTagName('ul')[0];
	this.element = document.getElementById('form_bg');
}

list.prototype.addLi = function() {
	for(var i = 11; i <= 20; i++) {
    li.className = "list-group-item";
 
    li.innerHTML = i;
	  ul.appendChild(li);
	}
};

list.prototype.doSomething = function() {

	for(var i = 11; i <= 20; i++) {
		ul = document.getElementsByTagName('ul')[0];

		li = document.createElement('li');
    li.className = "list-group-item";
 
    li.innerHTML = i;
	  ul.appendChild(li);
	}

	var liLen = document.getElementsByTagName('li');

	if( liLen.length > 10) {
		liLen == 10;
		console.log(liLen);
	}
};

var obj = new list;
obj.element.addEventListener( "DOMMouseScroll", function(e) {
	var e = window.event || e;
	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

	if (delta == 1) {
		obj.doSomething();
	} else if( delta == -1) {
		console.log(delta);
	}
});	
