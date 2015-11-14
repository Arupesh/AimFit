myApp.factory('socket',function(){

	var socket =io.connect('http://localhost:3000/?#/chat');

	return socket;
})