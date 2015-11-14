myApp.controller('home_landingCtrl',['$scope','myService',function($scope,myService){
 		
 	$scope.muscleWorkout = function() {
      };

$scope.goBack=function(){
	var data=myService.get();

//alert("clicked"+JSON.stringify(data))

history.back();

};
 	}]);