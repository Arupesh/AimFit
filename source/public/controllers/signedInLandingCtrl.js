myApp.controller('signedInLandingCtrl',['$scope','myService','$rootScope',"$location","webServiceSign",function($scope,myService,$rootScope,$location,webServiceSign){
		
//alert("signedInLandingCtrl called")

	$rootScope.loggedIn= false;
	
	var user =myService.get();
	console.log("Using fb data",user)
	$scope.name=user.name;

		
	$scope.getMap = function(user) {
			$location.path('/map');
		};


		  var promise=webServiceSign.getSignInData();

            promise.then(function(response){ 

              console.log("Here is the res",response.data);
              
              angular.forEach( response.data, function( value, key ){ 

              console.log("Here is the key",response.data[key] );
                   if (response.data[key].name === user.name) 
                   {
                         
                         console.log("match")

                   $scope.weight=response.data[key].weight;
                   $scope.height=response.data[key].height;

                   $scope.calcBMI =  (response.data[key].weight * 703) / response.data[key].height / response.data[key].height;
						       	$scope.BMIDetailsAvail=true;
						       	$scope.BMIDetailsNotAvail=false;
						        var BMI = $scope.calcBMI;
						        if (BMI < 18.5) {
						        	$scope.BMIhealth="Underweight";
						            $scope.workout="Muscle Workout";
						            $scope.goToPage="#/muscleWorkout";
						        } else if (BMI < 25){
						        	$scope.BMIhealth="Normal";
						        	$scope.workout="Muscle Workout";
						        	$scope.goToPage="#/muscleWorkout";
						        } else if (BMI < 30){
						        	$scope.BMIhealth="Overweight";
						            $scope.workout="Core Body Workout";
						            $scope.goToPage="#/coreBodyWorkout";
						        } else if (BMI > 30){
						        	$scope.BMIhealth="Obese";
						            $scope.workout="High Intensity Cardio and Core Body Workout";
						            $scope.goToPage="#/coreBodyWorkout";
						        };
                      }
                      else
                      {
                      	 		$scope.BMIDetailsAvail=false;
						       	$scope.BMIDetailsNotAvail=true;
                      }


                  }); 
             
            });


 	}]);