// Defining the Cat class

// function Cat(name, id, img_url) {
// 	this.name = name;
// 	this.id = id;
// 	this.img_url = img_url
// 	this.click = 0;
// }

// Cat.prototype.click = function() {
// 	this.click++;
// }




// Global variables
var counterA = 0;
var counterB = 0;

var clickCounterA = function() {
	counterA++
}

var clickCounterB = function() {
	counterB++
}

var displayCounterA = function () {
	$('.CA_outer').append("<h1 id='counterA'>" + counterA + "</h1>");
}

var displayCounterB = function () {
	$('.CB_outer').append("<h1 id='counterB'>" + counterB + "</h1>");
}

var removeCounterA = function() {
	$('#counterA').remove();
}

var removeCounterB = function() {
	$('#counterB').remove();
}

// Albert Clicker

$('#cat_albert').click(function() {
	console.log("A");
	clickCounterA();
	removeCounterA();
	displayCounterA();
});

// Bernard Clicker

$('#cat_bernard').click(function() {
	console.log("B");
	clickCounterB();
	removeCounterB();
	displayCounterB();
});