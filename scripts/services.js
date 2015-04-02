angular.module('car3380').factory('carService', ['$http', function($http) {
      return {
        getOne: function() {
          return $http.get('some.php');
        }
      }
}]).factory('UserService', ['$http', function($http) {
	var service = {
		isLoggedIn: false,



		session: function() {
			return $http.get('session.php').then(function(response) {
				if(response.data != 0) {
					//console.log(response.data);
					service.isLoggedIn = true;
				}
				
				return response;
	        });
		},

		signup: function(user) {
			return $http.post('signup.php', user).then(function(response) {
				service.isLoggedIn = true;
				//jquery reload....
				location.reload(true);
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
				service.isLoggedIn = true;
				//jquery reload....
				location.reload(true);
				return response;
			});
		 }
	}

	return service;
}]);