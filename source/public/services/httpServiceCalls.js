 myApp.factory('webServices',['$http',function($http){
        return {
            getFriends : function(){
                return  $http.get('data/signUp.json').then(function(response){ //wrap it inside another promise using then
                            return response;  //only return friends 
                        });
            },
            getCoupons : function(){
                return  $http.get('data/coupons.json').then(function(response){ //wrap it inside another promise using then
                            return response;  //only return friends 
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

myApp.factory('logOutService', function() {
 
 var flag = {}
   
   function set(flagSetAs) {
              flag = flagSetAs;
            }
  function get() {
            return flag;
          }
    return {
          set: set,
          get: get
        }
});



