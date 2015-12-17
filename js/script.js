
function loadData() {
    console.log("loadData excuted");

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
    var street_str = $('#street').val() + ", ";
    console.log(street_str);

    var city_str = $('#city').val();
    console.log(city_str);

    var bgimg = '<img class="bgimg" src="https://maps.googleapis.com/maps/api/streetview?key=AIzaSyBUW5CtmTcHoJ31XboFhgxW-qkAVX7gUZE&size=600x400&location=' + street_str + city_str + '">';
    
    console.log(bgimg);

    $body.append(bgimg);

    jQuery.getJSON('http://api.nytimes.com/svc/search/v2/articlesearch.response-format?[q=' + street_str + city_str + '&api-key=55af765a0b8bcab5081f739b47b97a04:5:73795265', function(data) {

        console.log(data);
    });
    

    return false;
};

$('#form-container').submit(loadData);
