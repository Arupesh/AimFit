myApp.controller('dealsCtrl',["$scope","webServices","$rootScope",function($scope,webServices,$rootScope){
 	

	$rootScope.loggedIn= false;
 	var coupons=[];
 	var promise=webServices.getCoupons();
    promise.then(function(response){ 
        console.log("Coupon Data received",response);
        $scope.coupons=response.data;
    });
 	

 }]);