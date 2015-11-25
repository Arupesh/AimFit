

//var myApp = angular.module('myApps',[]);


myApp.controller('AppCtrl',['$scope', '$http',"$location",function ($scope,$http,$location)
{
    
console.log("inside controller"); 
 
var refresh=function(){
        $http.get('/contactList').success(function(response){
        console.log("got the data",response);                            
        $scope.contactList=response;
             });
        $scope.contact="";
    };
    
refresh();

//Add contact function
$scope.addContact=function(userData){
   alert("Data to be posted >>"+JSON.stringify(userData))
 $http.post('/contactList',userData).success(function(response){
 console.log(JSON.stringify(response));
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

