angular.module('movieControllers',[])
.controller('MovieListController',function($scope) {
 $scope.loading = false;
 $scope.title = 'Our Musics'
 
})
.controller('scriptController', function($scope) {
  $scope.loading = false;
  $scope.title = 'Thank you.'
})

.controller('MovieVideosController',function($scope) {
 $scope.loading = false;
 $scope.title = 'Monkees Video'
 })
.controller('SignupController',function($scope) {
 $scope.loading = false;
 $scope.title = 'Signup'
 })

.controller('scheduleController',function($scope) {
 $scope.loading = false;
 $scope.title = 'Schedule a Show! We will contact you.'
 })
.controller('AboutController', function($scope) {
  $scope.title = "About Us";
  $scope.maps = [{
    address: 'Dublin, Ireland',
    zoom: 14,
    width: 400
  }, 
  {
    address: 'Rio de Janeiro, Brazil',
    zoom: 14,
    width: 400
  }, {
    address: 'Edinburgh, Scotland',
    zoom: 14,
    width: 400
  }];
  $scope.map = $scope.maps[0];
})
.controller('HomeController', function($scope) {
  $scope.title = "Welcome To Our WebSite";
})
.controller('MusicErrorController', function($scope, $routeParams) {
  $scope.message = $routeParams.message;
  $scope.status = $routeParams.status;
});
