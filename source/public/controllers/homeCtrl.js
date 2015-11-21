myApp.controller('homeCtrl',["$scope","$rootScope","$state",function($scope,$rootScope,$state){

$rootScope.loggedIn= true;
$scope.logOut=function(){

FB.logout(function(response) {
  // user is now logged out
  alert("You have Logged out of the AimFit application and Facebook, hoping to see you back soon");
 // $state.go('/');
     // event.preventDefault();
});
};

}]);