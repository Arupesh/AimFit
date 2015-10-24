myApp.controller('aboutCtrl',["$scope","$http","$location",
                          function($scope, $http, $location){
 	
  $scope.submitted = false;


  $scope.signInForm = function(user) {
    
    if ($scope.signin_form.$valid) {
      console.log(user);
      
      $http.post('/login',user)
                  .success(function(response){
                    console.log(response);
                  });
      $location.path('/');
    } else {
      $scope.signin_form.submitted = true;
    }
  }

 	}]);


myApp.directive('ngFocus', [function() {
  var FOCUS_CLASS = "ng-focused";
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, ctrl) {
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