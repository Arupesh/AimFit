'use strict';

myApp.controller('aboutCtrl',["$scope","$rootScope","$http","$location","myService","webServices",
                          function($scope,$rootScope, $http, $location,myService,webServices){
 	
  $scope.submitted = false;
  $scope.someProperty = true;
  //$scope.loggedIn = false;
  //$scope.loggedIn= false;
  //alert($rootScope.loggedIn)
  

  $scope.signInForm = function(user) {
    
    if ($scope.signin_form.$valid) {
      
      console.log(user);
    //  myService.set(user);
      /*$http.post('/login',user)
                  .success(function(response){
                    console.log(response);
                  });*/
    var promise=webServices.getFriends();
      
    promise.then(function(response){ 

      
      if (response.data.name===$scope.signin.name && response.data.email === $scope.signin.email)
      {
        myService.set(response); 
        $location.path('/signIn_landing');
      }
      else
      {
        alert("invalid credentials");
      }
          
    });


    }
    else {
      $scope.signin_form.submitted = true;
    }
  };

   
   
  function populateSignInForm() {
    var user =myService.get();
    //alert(JSON.stringify(user));

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

myApp.factory('myService', function() {
 var savedData = {}
 function set(data) {
   savedData = data;
 }
 function get() {
  return savedData;
 }

 return {
  set: set,
  get: get
 }

});

 myApp.factory('webServices',['$http',function($http){
        return {
            getFriends : function(){
                return  $http.get('data/signUp.json').then(function(response){ //wrap it inside another promise using then
                            return response;  //only return friends 
                        });
            }
        }
    }]);
 /*app.factory('signUpService', function ($http, $q) {
        return {
            getWeather: function(id) {
                // the $http API is based on the deferred/promise APIs exposed by the $q service
                // so it returns a promise for us by default
                return $http.get('/data/signUp.json/' + id)
                    .then(function(response) {
                        if (typeof response.data === 'object') {
                            return response.data;
                        } else {
                            // invalid response
                            return $q.reject(response.data);
                        }

                    }, function(response) {
                        // something went wrong
                        return $q.reject(response.data);
                    });
            }
        };
    });*/