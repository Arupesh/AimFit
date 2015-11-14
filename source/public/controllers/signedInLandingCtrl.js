myApp.controller('signedInLandingCtrl',['$scope','myService',"$location",function($scope,myService,$location){
		
//alert($scope.loggedIn)
		$scope.loggedIn = false;
		var user =myService.get();
		$scope.name=user.data.name;

		
		$scope.getMap = function(user) {
			alert(1)
			$location.path('/map');
		};
 	}]);