// Defining the Cat class

function Cat(name, id, img_url, words) {
	this.name = name;
	this.id = id;
	this.av_id = id + "_av";
	this.img_url = img_url
	this.words = words
	this.num_click = 0;
	this.click = function() {
		this.num_click++;
	}
}

var click = function(cat) {
	cat.num_click++;
};

// Cat.prototype.click = function() {
// 	this.num_click++;
// }

// Generate Cats

var albert = new Cat("Albert", "albert", "img/albert.jpg", "Click me!");
var bernard = new Cat("Bernard", "bernard", "img/bernard.jpg", "Me, me ,me!");
var carol = new Cat("Carol", "carol", "img/carol.jpg", "Mewo, what's this about?");
var dorothy = new Cat("Dorothy", "dorothy", "img/dorothy.jpg", "Can I go back to sleep now?");
var ellen = new Cat("Ellen", "ellen", "img/ellen.jpg", "Hi!");

// Put all Cats in a List

var cats = [albert, bernard, carol, dorothy, ellen];

var test; // For testing the in-func variables.

// App Main

$(function(){
	var model = {
		init: function() {
            localStorage.cats = JSON.stringify(cats);
        },
 
        getAllCats: function() {
            return JSON.parse(localStorage.cats);
        },

        setCatCount: function(cat_name) {
        	var data = JSON.parse(localStorage.cats);

        	for (var i = 0; i < data.length; ++i) {
        		if (data[i].name = cat_name) {
        			data[i].num_click++;
        		}
        	}

        	localStorage.cats = JSON.stringify(data);
        }
	};

	var octopus = {
		getCats: function() {
			var cats = model.getAllCats();

			// cats.forEach(function(cat) {
			// 	cat.click = function() {
			// 		this.num_click++;	
			// 	}
			// });

			// cats.forEach(function(cat) {
			// 	click(cat);
			// });

			return cats;
		},

		// This changes the model and calls up the view
		imageClicker: function(cat) {
			$('#' + cat.id).click((function(copyCat) {
				return function() {
					console.log("imageClicker is working.");
					
					// Increase cat count in localStorage and the view
					model.setCatCount(copyCat);
					click(copyCat);
		        	
		        	console.log(copyCat.name + " is clicked!");
		        	view.render(copyCat, "count");
	    	    	console.log("view.render(" + copyCat.name + ", 'count') is called.");
				}	        	
    		})(cat));
		},

		imageSelector: function(cat) {
			// console.log(cat.av_id);
			$('#' + cat.av_id).click((function(copyCat) {
				return function() {
					console.log("selector is working.");

					// Re-invoke the imageClicker

					// Re-render the view of the list
					view.render(copyCat, "display");
					console.log("view.render(" + copyCat + ", 'display') is called.");
				}
			})(cat));	
		},

		binder: function() {
			var cats = this.getCats();

			cats.forEach(function(cat){
				// Bind imageClicker functions to cats
				octopus.imageClicker(cat);
				// Bind imageSelector functions to cats
				octopus.imageSelector(cat);
				// console.log("binder func is working.");
				console.log("binder func is run.");
			});
		},
		init: function() {
            model.init();
            view.init();
            this.binder();
        }
	};

	var view = {
		init: function() {
			// Get model data (cats) from octopus
			var cats = octopus.getCats();
			console.log("Got cat data from the octopus. (view)");

			// Initialize the cat list
			for (cat in cats) {
				list_string = "<li class='collection-item avatar'><img src=" + cats[cat].img_url + " alt=" + cats[cat].name + " class='circle'><span class='title'>" + cats[cat].name + "</span><p>" + cats[cat].words + "</p><a href='#!' class='secondary-content'><i class='material-icons'" + " id=" + cats[cat].av_id + " class='cat-list-item'" + ">See me!</i></a></li>";
				$('#collection').append(list_string);
			}
			console.log("Cat list initialized. (view)");
		},

		render: function(cat, displayOrCount) {
			// Change counter number in the view
			

			if (displayOrCount === "count") {
				// Render the count
				console.log("render count is called.");
				console.log(cat.num_click);
				$('.display_subbox:last-of-type').empty();
				$('.display_subbox:last-of-type').append("<h4 id='counter'>" + cat.num_click + "</h4>");	
			}
			
			else if (displayOrCount === "display") {
				// Render the cat pic
				var pic_string = "<div class='display_subbox row'><h4>" + cat.name + "</h4></div><div class='display_subbox row'><img id=" + cat.id + " src=" + cat.img_url + " alt=" + cat.name + " class='display_pic'></div><div class='display_subbox row'><h4 id='counter'>" + cat.num_click + "</h4>";
				$('#display_box').empty();
				$('#display_box').append(pic_string);
				console.log(cat.name + " is selected!");
				console.log(cat.num_click);
			}

			else {
				console.log("Render function error.");
			}
			
		}
	};

	octopus.init();
});