'use strict';

console.log("facebook.js loaded.");

Facebook
window.fbAsyncInit = function() {
    FB.init({
        appId: '561568013993276',
        xfbml: true,
        version: 'v2.5'
    });

    if (typeof facebookInit == 'function') {
        facebookInit();
    }
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function facebookInit() {
    // Get login status OR Login to Facebook
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            console.log('Logged in.');
        }
        else { FB.login(); }
    });
}

function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
}

var ViewModel = function() {
    var self = this;

    this.fbIcon = function() {
        console.log("Testing ViewModel...");
    };
};

var myViewModel = new ViewModel();
ko.applyBindings(myViewModel);
