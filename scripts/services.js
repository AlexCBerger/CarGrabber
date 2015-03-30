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
				service.isLoggedIn = true;
				return response;
	        });
		},

		signup: function(user) {
			return $http.post('signup.php', user).then(function(response) {
				service.isLoggedIn = true;
				return response;
			});
		},

		login: function(user) {
			return $http.post('login.php', user).then(function(response) {
				service.isLoggedIn = true;
				return response;
			});
		 }
	}

	return service;
}]);