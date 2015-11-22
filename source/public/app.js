//var myApp = angular.module('myApps',['ui.router']);
var myApp = angular.module('myApps',['ui.router','app.directives.contactCard']);


myApp.config(function($stateProvider,$urlRouterProvider){
	console.log("inside ui.router ")
	//for any unmatched url redirect to main page
 $urlRouterProvider.otherwise("/"); 

 $stateProvider
 .state('home',{
 	url:"/",
 	templateUrl:"templates/home.html",
 	controller: 'homeCtrl'
 })
 .state('about',{
 	url:"/about",
 	templateUrl:"templates/about.html",
 	controller: 'aboutCtrl'
 })
.state('contact',{
 	url:"/contact",
 	templateUrl:"templates/contact.html",
 	controller: 'contactCtrl'
 })
.state('tour',{
  url:"/tour",
  templateUrl:"templates/home_landing.html",
  controller: 'home_landingCtrl'
 })
.state('signIn_landing',{
  url:"/signIn_landing",
  templateUrl:"templates/signIn_landing.html",
  controller: 'signedInLandingCtrl',
  authenticated: true
 })
.state('map',{
  url:"/map",
  templateUrl:"templates/map.html",
  controller: 'mapCtrl'
 })
.state('chat',{
  url:"/chat",
  templateUrl:"templates/chat.html",
  controller: 'chatCtrl',
  authenticated: true
 })
.state('deals',{
  url:"/deals",
  templateUrl:"templates/deals.html",
  controller: 'dealsCtrl',
  authenticated: true
 })
.state('muscleWorkout',{
  url:"/muscleWorkout",
  templateUrl:"templates/muscleWorkout.html",
  controller: 'muscleWorkoutCtrl'
 })
.state('coreBodyWorkout',{
  url:"/coreBodyWorkout",
  templateUrl:"templates/coreBodyWorkout.html",
  controller: 'coreBodyWorkoutCtrl'
 })
.state('questionForum',{
  url:"/questionForum",
  templateUrl:"templates/questionForum.html",
  controller: 'questionForumCtrl'
 })
.state('muscleWorkoutDiet',{
  url:"/muscleWorkoutDiet",
  templateUrl:"templates/muscleWorkoutDiet.html",
  controller: 'muscleWorkoutDietCtrl'
 })
.state('coreBodyWorkoutDiet',{
  url:"/coreBodyWorkoutDiet",
  templateUrl:"templates/coreBodyWorkoutDiet.html",
  controller: 'coreBodyWorkoutDietCtrl'
 })
.state('motivationTestimonies',{
  url:"/motivationTestimonies",
  templateUrl:"templates/motivationTestimonies.html",
  controller: 'motivationTestimoniesCtrl'
 })

});

myApp.run(["$rootScope","$location","authFact",function ($rootScope,$location,authFact) {


 //console.log('App is running'); 
 $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
  console.log('App is toState'+JSON.stringify(toState)); 

    if(toState.authenticated)
    {//alert(toState.authenticated)
      var userAuth=authFact.getAccessToken();
      //alert(JSON.stringify(userAuth))
      //alert(userAuth.length)
      if (!userAuth || userAuth.length === undefined)
      {
        $location.path('/');
      }
    }
});
  
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1494249820879100',
      xfbml      : true,
      version    : 'v2.5'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


 
}]);
