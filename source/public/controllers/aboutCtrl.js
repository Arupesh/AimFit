'use strict';

myApp.controller('aboutCtrl',["$scope","$rootScope","$http","$location","myService","webServices","authFact","$state","webServiceSign",
                          function($scope,$rootScope, $http, $location,myService,webServices,authFact,$state,webServiceSign){
 	
  $scope.submitted = false;
  $scope.someProperty = true;


  $scope.signInForm = function(user) {
    
    if ($scope.signin_form.$valid) {

            var promise=webServiceSign.getSignInData();

            promise.then(function(response){ 

              console.log("Here is the res",response.data);
              
              angular.forEach( response.data, function( value, key ){ 

              console.log("Here is the key",response.data[key] );
                         if (response.data[key].name === $scope.signin.name && response.data[key].email === $scope.signin.email)
                      {
                          myService.set(response.data[key].name); 
                         $state.go('signIn_landing');
                         return;
                      }
                      else
                      {
                         alert("Invalid Credentials");
                      }


                  }); 
             
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


  $scope.FBLogin = function() {
    FB.login(function(response) {
    if (response.authResponse) {
     console.log('Welcome!  Fetching your information.... ');
     FB.api('/me', function(response) {
     console.log('Good to see you, ', JSON.stringify(response) + '.');
     myService.set(response);
     var accessToken=FB.getAuthResponse().accessToken;
     console.log('accessToken, ', accessToken + '.');
     authFact.setAccessToken(accessToken);
     $state.go('signIn_landing');
      //event.preventDefault();
     });
    } else {
     console.log('User cancelled login or did not fully authorize.');
    }
});

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



