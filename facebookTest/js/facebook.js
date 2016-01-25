// Facebook API
window.fbAsyncInit = function() {
    FB.init({
        appId: '561568013993276',
        cookie: true, // Using cookies
        xfbml: true,
        version: 'v2.5'
    });
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
        myViewModel.response(response);

        if (response.status === 'connected') {
            console.log('All logged in.');
            var uid = response.authResponse.userID;
            var accessToken = response.authResponse.accessToken;
            console.log("UserID: " + uid);
            console.log("AccessToken: " + accessToken);
        }

        else if (response.status === 'not_authorized') {
            console.log('User is logged in to Facebook but not to your App.');
            console.log('Now logging in...');
            FB.login(function(response) {
                console.log("This is login response object: ");
                console.log(response);
                console.log("grantedScopes: ");
                console.log(response.authResponse);
            }, {
                scope: 'public_profile',
                return_scopes: true
            });
        }

        else {
            console.log('User is not logged in to anything Facebook , he/she probably hates Facebook.');
            console.log('Now logging in...');
            FB.login(function(response) {
                console.log("This is login response object: ");
                console.log(response);
                console.log("grantedScopes: ");
                console.log(response.authResponse);
            }, {
                scope: 'public_profile',
                return_scopes: true
            });
        }
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
// Model

// ViewModel

console.log("facebook.js loaded.");

// Facebook


var ViewModel = function() {
    var self = this;

    this.response = ko.observable();

    this.fbLogin = function() {
        facebookInit();
    };

    this.fbOut = function() {
        FB.logout(function(response) {
            console.log('user is now logged out');
            FB.getLoginStatus(function(response) {
                console.log(response.status);
            });
        });
    };
};

var myViewModel = new ViewModel();
ko.applyBindings(myViewModel);
