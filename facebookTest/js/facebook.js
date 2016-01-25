// Facebook API
window.fbAsyncInit = function() {
    FB.init({
        appId: '561568013993276',
        cookie: true, // Using cookies
        xfbml: true,
        version: 'v2.5'
    });
    console.log("FB API initiated.");
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

function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
}


// Model

var UserData = function(response) {
    var self = this;

    this.response = ko.observable(response);
    this.userID = ko.computed(function() {
        return self.response().authResponse.userID;
    }, this);
    this.accessToken = ko.computed(function() {
        return self.response().authResponse.accessToken;
    }, this);

    this.status = ko.computed(function() {
        return self.response().status;
    }, this);

    // this.name = ko.computed(function() {
    //     return self.response().name;
    // });
    //
    // this.first_name = ko.computed(function() {
    //     return self.response().first_name;
    // });
    //
    // this.last_name = ko.computed(function() {
    //     return self.response().last_name;
    // });
    //
    // this.age_range = ko.computed(function() {
    //     return self.response().age_range;
    // });
    //
    // this.link = ko.computed(function() {
    //     return self.response().link();
    // });
    //
    // this.gender = ko.computed(function() {
    //     return self.response().gender;
    // });
    //
    // this.locale = ko.computed(function() {
    //     return self.response().locale;
    // });
    //
    // this.timezone = ko.computed(function() {
    //     return self.response().timezone;
    // });
    //
    // this.updated_time = ko.computed(function() {
    //     return self.respone().updated_time;
    // });
    //
    // this.verified = ko.computed(function() {
    //     return self.reponse().verified;
    // });
};

// UserDataInit

var userDataUnit = function(response) {
    self.userdata = new UserData(response);
    console.log("UserData instantiated.");
    console.log("Testing userdata (response)...");
    console.log(self.userdata.response());
};

// ViewModel

var ViewModel = function() {
    var self = this;

    this.fbLogin = function() {
        // Get login status OR Login to Facebook
        FB.getLoginStatus(function(response) {
            console.log("Response all good!....... " + response);

            if (response.status === 'connected') {
                console.log('All logged in.');

                userDataUnit(response);
                console.log(self);

                // var uid = response.authResponse.userID;
                // var accessToken = response.authResponse.accessToken;

                console.log("UserID: " + userdata.userID());
                console.log("AccessToken: " + userdata.accessToken());
            }

            else if (response.status === 'not_authorized') {
                console.log('User is logged in to Facebook but not to your App.');
                console.log('Now logging in...');
                FB.login(function(response) {
                    userDataUnit(response);
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
                    userDataUnit(response);
                    console.log("This is login response object: ");
                    console.log(userdata.response());
                    console.log("grantedScopes: ");
                    console.log(userdata.response().authResponse);
                }, {
                    scope: 'public_profile',
                    return_scopes: true
                });
            }
        });
    };

    this.fbOut = function() {
        FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                console.log("Logging out....sucker!");
                FB.logout(function(response) {
                    console.log('user is now logged out');
                    FB.getLoginStatus(function(response) {
                        console.log(response.status);
                    });
                });
            }

            else if (response.status === 'not_authorized') {
                console.log("Logging out....sucker!");
                FB.logout(function(response) {
                    console.log('user is now logged out');
                    FB.getLoginStatus(function(response) {
                        console.log(response.status);
                    });
                });
            }

            else {
                console.log("Wake up! You don't have a girlfriend!");
            }

        });


        // FB.logout(function(response) {
        //     console.log('user is now logged out');
        //     FB.getLoginStatus(function(response) {
        //         console.log(response.status);
        //     });
        // });
    };
};

var myViewModel = new ViewModel();
ko.applyBindings(myViewModel);
