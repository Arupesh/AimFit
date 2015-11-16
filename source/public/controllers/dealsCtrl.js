myApp.controller('dealsCtrl',["$scope","webServices",function($scope,webServices){
 	
 	var coupons=[];
 	var promise=webServices.getCoupons();
    promise.then(function(response){ 
        console.log("Coupon Data received",response);
        $scope.coupons=response.data;
    });
 	

 }]);