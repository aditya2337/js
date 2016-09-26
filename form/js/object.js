//Constructor class user
function user( userId, password, mydata, element) {

	this.userId = userId;
	this.password = password;
	this.mydata = JSON.parse(data);
	this.element = element;

	var checkExists;
}

// Function to destroy any session and logout the user.
function logout() {
	localStorage.clear();
	window.location = 'file:///home/aditya/Desktop/calculator/form/main.html';
}

//method to load the user, if the user exist.
user.prototype.loadUser = function() {

	//getting values of the textfields
	userId = document.getElementById('userid').value;
	password = document.getElementById('pwd').value;

	//the element to be manipulated.
	element = document.getElementById('form_bg');

	checkExists = false;

	//loop through the json file and check if the user exists
	for (var i = 0; i < mydata.length; i++) {
		if(mydata[i].userid == userId && mydata[i].pwd == password) {
			checkExists = true;
		} 
	}

	// if the credentials are there on let him through and store his session
	// else through an alert message.
	if (checkExists) {
		var session =  userId;
		localStorage.setItem( 'session', session);
	} else {
		alert("not a registered user");
	}
}

// Load all the json data and check if asession exist.
user.prototype.loadPage = function() {
	mydata = JSON.parse(data);
	if ( localStorage.getItem( 'session')) {
		document.getElementsByTagName( 'h2')[0].innerHTML = "Welcome " + localStorage.getItem( 'session') ;
		document.getElementById('loggedIn').innerHTML = "Logout";
	}
}

// Create an instance of the user Object.
var obj = new user();

if( window.location.pathname == '/home/aditya/Desktop/calculator/form/main.html') {
	var loginButton = document.getElementById("login");
	// Event listner for button click
	loginButton.addEventListener( 'click', function() {
		obj.loadUser();
	});
}



// Event listner to load the user.
window.addEventListener( 'load', function() {
	obj.loadPage();
})
