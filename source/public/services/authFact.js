myApp.factory('authFact', function() {
 
 var authFact = {};
	 
     authFact.setAccessToken=function(accesstoken) {
   						authFact = accesstoken;
 						}
 	 authFact.getAccessToken=function() {
  					return authFact;
 				  }
 		return authFact;
});