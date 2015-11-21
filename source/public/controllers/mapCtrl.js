
var cities = [
              {
                  city : 'Gym',
                  desc : 'This is the best country in the world!',
                  lat : 11.0164601,
                  long : 76.3581787
              },
              {
                  city : 'Fitness',
                  desc : 'The Heart of India!',
                  lat : 12.0164601,
                  long : 76.3581787
              }
          ];

          //Angular App Module and Controller
         // var sampleApp = angular.module('mapsApp', []);
         myApp.controller('mapCtrl',["$scope","$rootScope","$http","$location","myService","webServices",
                          function($scope,$rootScope, $http, $location,myService,webServices){
       
          var latitude,longitude,center;
          function showLocation(position) {
             var latitude = position.coords.latitude;
             var longitude = position.coords.longitude;
            //alert("Latitude : " + latitude + " Longitude: " + longitude);
            createMarker(latitude ,longitude);
         }

         function errorHandler(err) {
            if(err.code == 1) {
               alert("Error: Access is denied!");
            }
            
            else if( err.code == 2) {
               alert("Error: Position is unavailable!");
            }
         }
            if(navigator.geolocation){
               // timeout at 60000 milliseconds (60 seconds)
               var options = {timeout:60000};
               navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
            }
            
            else{
               alert("Sorry, browser does not support geolocation!");
            }

              $scope.markers = [];
              
              
              var infoWindow = new google.maps.InfoWindow();
              
              var createMarker = function (latitude,longitude){
                  console.log("createMarker",latitude,longitude)
                  var mapOptions = {
                  zoom: 8,
                  center: new google.maps.LatLng(latitude,longitude),
                  mapTypeId: google.maps.MapTypeId.TERRAIN
              }

                $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
                  var marker = new google.maps.Marker({
                      map: $scope.map,
                      position: new google.maps.LatLng(latitude, longitude)
                     // title: info.city
                  });
                  marker.content = '<div class="infoWindowContent">' + "You are here!!" + '</div>';
                  
                  google.maps.event.addListener(marker, 'click', function(){
                      infoWindow.setContent('<h3>' + "Welcome" + '</h3>' + marker.content);
                      infoWindow.open($scope.map, marker);
                  });
                  
                  $scope.markers.push(marker);
                  
                     for (i = 0; i < cities.length; i++){
                        createGymMarker(cities[i]);
                     }

              }  
             
              
               var createGymMarker = function (info){
                  console.log("createGymMarker",info)
                  var marker = new google.maps.Marker({
                      map: $scope.map,
                      position: new google.maps.LatLng(info.lat, info.long),
                      title: info.city
                  });
                  marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
                  
                  google.maps.event.addListener(marker, 'click', function(){
                      infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                      infoWindow.open($scope.map, marker);
                  });
                  
                  $scope.markers.push(marker);
      
              }  
              
              $scope.openInfoWindow = function(e, selectedMarker){
                  e.preventDefault();
                  google.maps.event.trigger(selectedMarker, 'click');
              }

          }]);

