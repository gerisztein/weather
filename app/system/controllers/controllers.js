var app = angular.module('clickWeatherWidget', []);

app.controller('clickWeather', function($scope, $http, weatherService) {
	
	var city = weatherService.city,
		unit = weatherService.unit,
		lang = weatherService.lang;
	
	var urlAPI = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=' + unit + '&lang=' + lang;
	
	$http({
		method: 'GET',
		url: urlAPI
	})
	.success(function(data) {
		$scope.clima = data;
	})
	.error(function(data) {
		console.log(data);
	});
})