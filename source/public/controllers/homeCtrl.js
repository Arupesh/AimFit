myApp.controller('homeCtrl',["$scope","logOutService",function($scope,logOutService){

$scope.loggedIn=true;
logOutService.set(true);
//$rootScope.loggedIn= false;

}]);