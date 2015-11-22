myApp.controller('signedInLandingCtrl',['$scope','myService','$rootScope',"$location",function($scope,myService,$rootScope,$location){
		
//alert("signedInLandingCtrl called")

	$rootScope.loggedIn= false;
	
	var user =myService.get();
	console.log("Using fb data",user)
	$scope.name=user.name;

		
	$scope.getMap = function(user) {
			$location.path('/map');
		};
 	}]);