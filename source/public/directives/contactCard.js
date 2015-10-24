angular.module('app.directives.contactCard',[])
.directive('contactCard',function(){
return{
	restrict :'E',//how to pull things in
	scope:{
		data:'='
	},//how to bind
	transclude:true, 
	replace:true,
	templateUrl:'templates/directives/contactCard.html',
	//if you want to bind and listen to dom events we use link function which is not dependency injected
	link:function(scope,element,attrs){
		console.log(arguments);
	},
	controller: function($scope,$interval){
		console.log(JSON.stringify($scope.data)); 
		/*$interval(function(){
			console.log("interval");
		},1000);*/
	}

}

});

