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
  controller: 'signedInLandingCtrl'
 })
.state('map',{
  url:"/map",
  templateUrl:"templates/map.html",
  controller: 'mapCtrl'
 })
.state('chat',{
  url:"/chat",
  templateUrl:"templates/chat.html",
  controller: 'chatCtrl'
 })
});