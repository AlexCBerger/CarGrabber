angular.module('car3380').controller('mainCtrl', ['UserService', function(UserService) {
	var self = this;

	self.UserService = UserService;

	self.user = {};

	UserService.session().then(function(success) {
		//self.showSignup = false; should be put in here.
    	// $location.path('/');
    	//console.log(success.data);
    	self.user = success.data;
    }, function(error) {
     	self.errorMessage = error.data.msg;
    });

}]).controller('topnav', [function() {
	
	var self = this;

	//self.tabs = [{"name" : "Cars for sale", "url" : "#/buy"}, {"name" : "Sell my car", "url" : "#/sell"}, {"name" : "Reviews", "url" : "#/reviews"}];

	
}]).controller('signupCtrl', ['UserService', '$location', function(UserService, $location){

	var self = this;

	self.showSignup = false;
	self.user = {username: '', email: '', cfemail: '', password: '', cfpassword: ''};

	self.signup = function() {
		self.showSignup = true;
		var backHeight = $(document).height();
		var backWidth = $(document).width()-1;
		$("#signup").css({
			"width" : backWidth,
			"height" : backHeight
		});
		
		var form = $("#signup-form form");
		var formLeft = ($(window).width() - form.width()) / 2;
		var formTop = ($(window).height() - form.height() - 100) / 2
		form.css({
			"left" : formLeft,
			"top" : formTop
		});
		console.log(form.height());
		console.dir(document.getElementById("suform").style);
	};

	self.submitSignup = function() {
		//self.showSignup = false; //for test convenient
		UserService.signup(self.user).then(function(success) {
			//self.showSignup = false; should be put in here.
			if(success.data == 0) {
				self.showSignup = true;
			} else {
				self.showSignup = false;
				location.reload(true);
				$location.path('/');
			}
			
			console.log(success.data);
        	
        }, function(error) {
         	self.errorMessage = error.data.msg;
        })
	};

}]).controller('LoginCtrl', ['UserService', '$location', function(UserService, $location){

	var self = this;

	self.showLogin = false;
	self.user = {email: '', password: ''};

	self.login = function() {
		self.showLogin = true;
		var backHeight = $(document).height();
		var backWidth = $(document).width()-1;
		$("#login").css({
			"width" : backWidth,
			"height" : backHeight
		});
		
		var form = $("#login-form form");
		var formLeft = ($(window).width() - form.width()) / 2;
		var formTop = ($(window).height() - form.height() - 100) / 2
		form.css({
			"left" : formLeft,
			"top" : formTop
		});
	};

	self.submitLogin = function() {
		//self.showLogin = false; //for test convenient
		UserService.login(self.user).then(function(success) {
			//self.showSignup = false; should be put in here.
		if(success.data == 0) {
			self.showLogin = true;
		} else {
			self.showLogin = false;
			location.reload(true);
			$location.path('/');
		}
		console.log(success.data);

        }, function(error) {
         	self.errorMessage = error.data.msg;
        })
	};

}]).controller('UserCtrl', ['UserService', '$location', function(UserService, $location){

	var self = this;


	self.logout = function() {
		UserService.logout().then(function(success) {
			$location.path('/');
			
		}, function(error) {
			self.errorMessage = error.data;
		});
	};

	self.Editprofile = function() {
		// UserService.login(self.user).then(function(success) {
		// 	//self.showSignup = false; should be put in here.
  //       	$location.path('/');
  //       }, function(error) {
  //        	self.errorMessage = error.data;
  //       })
	};

}]).controller('searchform', ['carService', '$location', function(carService, $location) {
	var self = this;

	self.carService = carService;


	self.makes = {
		"Acura": ["model1", "model2"], 
		"AMC": ["model0", "model4"], 
		"Audi": ["model1", "model45"]
	};


	// self.results = {};

	self.prices = [];
	for(var i = 0; i < (100000/5000); i++) {
		self.prices[i] = (i+1) * 5000;
	}


	//here should use a ajax to retrieve models and makes;
	carService.getMakes().then(function(success) {

		//same thing in the service
		//self.makes = JSON.parse(success.data);
		
	}, function(error) {
		//alert("Asdads");
	});



	// submit search form
	self.submit = function() {
		//submit the form 
		carService.submitForm(search).then(function(success) {
			//self.showSignup = false; should be put in here.
			self.results = success.data;
			console.log(self.results);
			//redirect to #result
        	$location.path('/results');
        }, function(error) {
         	self.errorMessage = error.data.msg;
        }
		
	)};

	
	
}]).controller('sellCtrl', ['UserService', '$location', function(UserService, $location) {
	var self = this;

	self.sell = {};

	self.submit = function() {
		UserService.sellCar(self.sell).then(function(success) {
        	$location.path('/');
		console.dir(success.data);
        }, function(error) {
         	self.errorMessage = error.data.msg;
        })
	}

}]).controller('content', [function() {
	var self = this;

	self.reviews = [
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta, ligula nec aliquam faucibus, nunc massa luctus nisi, vel finibus libero odio nec magna. Mauris et iaculis arcu. Nullam in velit eget enim eleifend condimentum at sit amet lacus. Donec volutpat aliquam condimentum. Quisque maximus elementum nisi, eget tempor magna scelerisque tincidunt. Vestibulum at nisi ac ante viverra posuere sit amet eget ipsum. Phasellus quis elit eu enim mattis lacinia sit amet vitae nulla.",
		"Nulla leo nunc, finibus sit amet enim sit amet, euismod tempus eros. Nullam sit amet sapien sit amet velit tempor bibendum. Nullam quam mauris, fringilla quis metus vestibulum, pharetra feugiat nisl. Curabitur dictum sollicitudin felis sed fermentum. Nunc ac fringilla tortor. Nam facilisis viverra neque, nec rutrum diam feugiat a. Integer tincidunt fermentum est, eu mollis ex bibendum in. Etiam a velit in metus ornare luctus eget sed quam. In ex libero, laoreet quis diam et, sodales ultricies dui. Donec et purus nunc. Quisque vitae vestibulum elit. Curabitur congue quam libero, in pellentesque dolor varius in. Nam congue elit a dui mattis, non feugiat ex luctus.",
		"Vivamus ornare, magna quis maximus consectetur, nisl dolor venenatis sem, sed consequat purus urna non odio. Suspendisse varius libero eu interdum semper. Praesent vulputate nec massa vitae maximus. In erat sem, euismod at tortor lobortis, commodo rutrum tortor. Proin ultricies tortor dui, nec euismod nisi venenatis ut. Duis condimentum mattis dignissim. Mauris vulputate iaculis nisl sit amet pharetra. Integer nisl metus, condimentum at enim sit amet, sollicitudin accumsan purus. Nulla ut tempor risus, sit amet posuere libero. Mauris a neque mi. Nunc imperdiet ullamcorper nulla, nec interdum mi feugiat vitae."		
	]
}]);
