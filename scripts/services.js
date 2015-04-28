angular.module('car3380').factory('carService', ['$http', function($http) {

	  var service = {
	  		makes: [],

	  		getMakes: function() {
	  			return $http.get('getdata.php').then(function(response) {
	  				//makes = JSON.parse(response);
	  				// console.dir(response);
					return response;
		        });

	  		},

	  		submitForm: function(search) {
	  			return $http.get('search.php', search).then(function(response) {
					console.dir(response);
					//location.reload(true);
					return response;
				});
	  		}


	  };

      return service; 

}]).factory('UserService', ['$http', function($http) {
	var service = {
		isLoggedIn: false,



		session: function() {
			return $http.post('session.php').then(function(response) {
				if(response.data != 0) {
					//console.log(response.data);
					service.isLoggedIn = true;
				}
				
				return response;
	        });
		},

		signup: function(user) {
			return $http.post('signup.php', user).then(function(response) {
				if(response.data == 0) {
					service.isLoggedIn = false;
				} else {
					service.isLoggedIn = true;
				}
				//jquery reload....
				//location.reload(true);
				return response;
			});
		},

		logout: function() {
			return $http.get('logout.php').then(function(response) {
				service.isLoggedIn = false;
				//jquery reload....
				location.reload(true);
				return response;
	        });
		},

		login: function(user) {
			return $http.post('login.php', user).then(function(response) {
				if(response.data == 0) {
					service.isLoggedIn = false;
				} else {
					service.isLoggedIn = true;
					//jquery reload....
					//location.reload(true);
				}
				return response;
			});
		 },

		sellCar: function(sell) {
			return $http.post('sell.php', sell).then(function(response) {

			
				return response;
			});
		 }
	}

	return service;
}]);
