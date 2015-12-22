// Defining the Cat class

function Cat(name, id, img_url, words) {
	this.name = name;
	this.id = id;
	this.av_id = id + "_av";
	this.img_url = img_url
	this.words = words
	this.num_click = 0;
}

Cat.prototype.click = function() {
	this.num_click++;
}

Cat.prototype.test = function() {
	console.log("Testing prototype");
}

var albert = new Cat("Albert", "albert", "img/albert.jpg", "Click me!");
var bernard = new Cat("Bernard", "bernard", "img/bernard.jpg", "Me, me ,me!");
var carol = new Cat("Carol", "carol", "img/carol.jpg", "Mewo, what's this about?");
var dorothy = new Cat("Dorothy", "dorothy", "img/dorothy.jpg", "Can I go back to sleep now?");
var ellen = new Cat("Ellen", "ellen", "img/ellen.jpg", "Hi!");

var cats = [albert, bernard, carol, dorothy, ellen];

// Insert Cat List to DOM

var list_string, pic_string;

for (cat in cats) {
	// Populating the Cat List
	list_string = "<li class='collection-item avatar'><img src=" + cats[cat].img_url + " alt=" + cats[cat].name + " class='circle'><span class='title'>" + cats[cat].name + "</span><p>" + cats[cat].words + "</p><a href='#!' class='secondary-content'><i class='material-icons'" + " id=" + cats[cat].av_id + ">See me!</i></a></li>"
	// pic_string = "<div class='display_subbox row'><h4>" + cats[cat].name + "</h4></div><div class='display_subbox row'><img id=" + cats[cat].id + " src=" + cats[cat].img_url + " alt=" + cats[cat].name + " class='display_pic'></div><div class='display_subbox row'><h4>" + cats[cat].click + "</h4>";
	$('#collection').append(list_string);

	// On-click Image Display Function
	$('#' + cats[cat].av_id).click((function(copyCat) {
		return function() {
			var pic_string = "<div class='display_subbox row'><h4>" + copyCat.name + "</h4></div><div class='display_subbox row'><img id=" + copyCat.id + " src=" + copyCat.img_url + " alt=" + copyCat.name + " class='display_pic'></div><div class='display_subbox row'><h4 id='counter'>" + copyCat.num_click + "</h4>";
			$('#display_box').empty();
			$('#display_box').append(pic_string);
			console.log(copyCat.name + " is selected!");
			console.log(copyCat.num_click);

			$('#' + copyCat.id).click(function() {
	        	copyCat.click();
	        	var test = $('#counter').text;
	        	$('#counter').empty();
				$('#counter').append("<h4 id='counter'>" + copyCat.num_click + "</h4>");
	        	console.log(copyCat.name + " is clicked!");	
			});
		}
	})(cats[cat]));

	// Image Clicker function which increments the count
	$('#' + cats[cat].id).click((function(copyCat) {
		return function() {
        	copyCat.click();
        	$('#counter').empty();
			$('#counter').append("<h4 id='counter'>" + copyCat.num_click + "</h4>");
        	console.log(copyCat.name + " is clicked!");
    	};
	})(cats[cat]));

}

// Set display box the same height as the collection
$("#display_box").height($("#collection").height());

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