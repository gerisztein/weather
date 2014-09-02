// // function Weather($scope, $http) {
// //     $http.get('http://api.openweathermap.org/data/2.5/weather?q=Sao+Paulo,BR').
// //         success(function(data) {
// //             $scope.weather = data;
// //         });
// // }
// var app = angular.module('clickWeatherWidget', []);
// app.controller('clickWeatherCtrl', function($scope, $http, clickWeather) {
	
// 	var city = clickWeather.city,
// 		unit = weatherService.unit,
// 		lang = weatherService.lang;
	
// 	var urlAPI = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=' + unit + '&lang=' + lang;
	
// 	$http({
// 		method: 'GET',
// 		url: urlAPI
// 	})
// 	.success(function(data) {
// 		$scope.clima = data;
// 	})
// 	.error(function(data) {
// 		console.log(data);
// 	});
// });