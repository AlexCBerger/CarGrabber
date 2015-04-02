angular.module('car3380', ['ngRoute']).config(function($routeProvider) {
	// console.log("asdasdasdas");
    $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      // controller:'loginCtrl'
    }).when('/buy', {
      templateUrl: 'views/test.html',
      // controller:'loginCtrl'
    }).when('/sell', {
      templateUrl: 'views/test.html',
      // controller:'loginCtrl'
    }).when('/reviews', {
      templateUrl: 'views/test.html',
      // controller:'loginCtrl'
    }).when('/search', {
      templateUrl: 'views/fullsearch.html',
      // controller:'loginCtrl'
    }); //.when('sd', {
    //   templateUrl: 'views/team_details.html',
    //   controller:'TeamDetailsCtrl as teamDetailsCtrl',
    //   resolve: {
    //     auth: ['$q', '$location', 'UserService',
    //       function($q, $location, UserService) {
    //          return UserService.session().then(
    //            function(success) {},
    //            function(err) {
    //               $location.path('/login');
    //               $location.replace();
    //               return $q.reject(err);
    //          });
    //     }]
    //   }
    // });
    $routeProvider.otherwise({
      redirectTo: '/'
    });
  });