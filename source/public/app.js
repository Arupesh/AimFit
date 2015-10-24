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
});
  /*
myApp.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
  alert("okat")
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'homeCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'about.html',
        controller: 'aboutCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'contact.html'
      })
  }])*/