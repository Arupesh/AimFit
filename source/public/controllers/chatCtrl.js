myApp.controller('chatCtrl',["$scope","socket",function($scope,socket){
 	  $scope.msgs=[];
    var person = prompt("Please enter your name", "Harry Potter");
    $scope.sendMsg=function(){
       socket.emit('send msg', $scope.msg.text)
       $scope.msg='';
    }
    socket.on('get msg' , function(data){
      console.log("get msg on called",data)
      $scope.msgs.push(data);
      // $scope.$digest();
      $scope.$apply();
    })
 
 	}]);