var app = angular.module('clickWeatherWidget', []);
app.directive('clickWeather', [function ($scope, $http) {
	return {
		restrict: 'E',
		replace: true,
		template: '<div><span class="icon-{{ weather.weather[0].icon }}"></span><span class="cw_name">{{ weather.name }}<p>{{ weather.weather[0].description }}</p></span><span class="cw_temp">{{ weather.main.temp | number:1 }}</span></div>',
		controller: ['$scope', '$http', function($scope, $http) {
	    	$scope.getTemp = function(city, unit, lang) {
	        	$http({
	          		method: 'GET',
	          		url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=' + unit + '&lang=' + lang
	        	}).success(function(data) {
	        		$scope.weather = data;
	        		
	          	});
	        }
	    }],
		link: function(scope, element, attr) {
			var city = attr.city,
				unit = attr.unit,
				lang = attr.lang;
			scope.getTemp(city, unit, lang);
     	}
   };
}]);