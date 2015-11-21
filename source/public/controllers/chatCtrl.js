myApp.controller('chatCtrl',["$scope","socket","$rootScope",function($scope,socket,$rootScope){
 	  $scope.msgs=[];
    $rootScope.loggedIn= false;
    var person = prompt("Please enter your name", "Harry Potter");
    $scope.sendMsg=function(){
       socket.emit('send msg', {name : person , msg : $scope.msg.text} )
       $scope.msg='';
    }
    socket.on('get msg' , function(data){
      console.log("get msg on called",data)
      $scope.msgs.push(data);
      // $scope.$digest();
      $scope.$apply();
    })
 
 	}]);