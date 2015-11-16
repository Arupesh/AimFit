'use strict';

myApp.controller('aboutCtrl',["$scope","$rootScope","$http","$location","myService","webServices",
                          function($scope,$rootScope, $http, $location,myService,webServices){
 	
  $scope.submitted = false;
  $scope.someProperty = true;

  $scope.signInForm = function(user) {
    
    if ($scope.signin_form.$valid) {
            var promise=webServices.getFriends();
            promise.then(function(response){ 

            if (response.data.name === $scope.signin.name && response.data.email === $scope.signin.email)
            {
                myService.set(response); 
               $location.path('/signIn_landing');
            }
            else
            {
               alert("Invalid Credentials");
            }
    });


    }
    else {
      $scope.signin_form.submitted = true;
    }
  };

   
   
  function populateSignInForm() {
    var user =myService.get();

       $scope.signin = {
                           name: user.name,
                           email: user.email

                        };

                };

 	}]);


myApp.directive('ngFocus', [function() {
  var FOCUS_CLASS = "ng-focused";
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element,   attrs, ctrl) {
      ctrl.$focused = false;
      element.bind('focus', function(evt) {
        element.addClass(FOCUS_CLASS);
        scope.$apply(function() {ctrl.$focused = true;});
      }).bind('blur', function(evt) {
        element.removeClass(FOCUS_CLASS);
        scope.$apply(function() {ctrl.$focused = false;});
      });
    }
  }
}]);



