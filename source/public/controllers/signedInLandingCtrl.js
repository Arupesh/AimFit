myApp.controller('signedInLandingCtrl',['$scope','myService','logOutService',"$location",function($scope,myService,logOutService,$location){
		
//alert($scope.loggedIn)

var logOutFlag =logOutService.get();
		//$scope.name=user.data.name;
		console.log("logOutFlag>>"+logOutFlag)
		
		$scope.loggedIn = !logOutFlag;



		var user =myService.get();
		$scope.name=user.data.name;

		
		$scope.getMap = function(user) {
			$location.path('/map');
		};
 	}]);