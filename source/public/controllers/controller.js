

//var myApp = angular.module('myApps',[]);


myApp.controller('AppCtrl',['$scope', '$http',"$location","webServiceSign",function ($scope,$http,$location,webServiceSign)
{
    
 
var refresh=function(){
       var promise= webServiceSign.getSignInData();
       promise.then(function(response){ 
        console.log("Now received the data",response);
        $scope.contactList=response;
    });
        $scope.contact="";
    };
    
//refresh();

//Add contact function
$scope.addContact=function(userData){
   alert("Data to be posted >>"+JSON.stringify(userData))

   var promise= webServiceSign.postSignUpData(userData);
       promise.then(function(response){ 
       console.log("Now received the posted data",response);
       $location.path('/about');
       refresh();
    });
};

//Remove contact function    
// $scope.remove=function(id){
//     console.log(id);
//         $http.delete('/contactList/'+id).success(function(response){
//         refresh();
//         });
//     };
                            
                            
// $scope.edit=function(id)
//    {
//  console.log(id);
//             $http.get('/contactList/'+id).success(function(response){
//        $scope.contact=response;
//        });
//    };
    
//     $scope.update=function()
//    {
//  console.log($scope.contact._id);
//             $http.put('/contactList/'+$scope.contact._id,$scope.contact).success(function(response){
//        refresh();
//        });
    
//    };


}]);

myApp.directive('selectAllOnFocus',function(){
return{
restrict:'E',
controller:function($scope){
    alert("Fire");
},    
link:function(scope, element,attr) {
element.mouseup(function(event){
    event.preventDefault();
});
element.click(function(){
    event.select();
    alert("type")
});
}}});

