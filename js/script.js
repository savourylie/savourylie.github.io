
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

    // NYTimes key values (global)

    var headlines = [];
    var leadParagraphs = [];
    var urls = [];
    var number_of_articles;

    // Get NYTimes Artibles

    jQuery.getJSON('http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + street_str + city_str + '&api-key=55af765a0b8bcab5081f739b47b97a04:5:73795265', function(data) 
    {
        console.log("Data recieved!")
        console.log(data);

        // Note:
        // headline = data.response.docs[i].headline.main
        // leadParagraph = data.response.docs[i].lead_paragraph
        // url = data.response.docs[i].web_url
        
        // Get number of articles
        number_of_articles = data.response.docs.length;

        for (var i = 0; i < number_of_articles; ++i) {
            headlines.push(data.response.docs[i].headline.main);
            leadParagraphs.push(data.response.docs[i].lead_paragraph);
            urls.push(data.response.docs[i].web_url);
        }

        console.log("Data processed!")
    })
    .done(function() {
        console.log( "DOM manipulation for NYT starts!" );
        for (var i = 0; i < number_of_articles; ++i) {
            if ((headlines[i] !== undefined) && leadParagraphs[i] !== null) {
                $('#nytimes-articles').append("<a href='" + urls[i] + "'>" + "<li class='article'><h4>" + headlines[i] + "</h4></a><p>" + leadParagraphs[i] + "</p></li>");    
            }
            
        }        
    })
    .error(function() {
        console.log("this is the error handler.")
    })
    .fail(function() {
        console.log( "this is the fail handler." );
    })
    .always(function() {
        console.log( "NYT complete" );
    });

    // Get Wikipedia Articles using JSONP

    var wikiTitles = [];
    var wikiTitles_URL = [];
    var wikiSnippets = [];
    var wikiURLs = [];
    var number_of_articles_wiki;

    $.ajax({
        url: "https://en.wikipedia.org/w/api.php",
        data: { action: 'query', list: 'search', srsearch: street_str + city_str, format: 'json' },
        dataType: "jsonp"
    })
    .success(function(data){
        console.log(data);
        console.log("success");

        number_of_articles_wiki = data.query.search.length;
        
        for (var i = 0; i < number_of_articles_wiki; ++i) {
            wikiTitles.push(data.query.search[i].title);
            wikiSnippets.push(data.query.search[i].snippet);

            // Parsing the Titles and Make Titles for URLs

            wikiTitles_URL.push(wikiTitles[i].split(" ").join("_"));

            // Put into the URL array

            wikiURLs.push("https://en.wikipedia.org/wiki/" + wikiTitles_URL[i]);
        }
    })
    .done(function() {
        console.log( "DOM manipulation for Wiki starts!" );
        console.log(wikiURLs);

        for (var i = 0; i < number_of_articles_wiki; ++i) {
            if ((wikiTitles[i] !== undefined) && wikiTitles[i] !== null) {
                $('#wikipedia-links').append("<a href='" + wikiURLs[i] + "'>" + "<li class='article'><h4>" + wikiTitles[i] + "</h4></a><p>" + wikiSnippets[i] + "</p></li>");    
            }
            
        }
    })
    .fail(function() {
        console.log( "error" );
    })
    .always(function() {
        console.log( "Wiki complete" );
    });
 

    return false;
};

$('#form-container').submit(loadData);
