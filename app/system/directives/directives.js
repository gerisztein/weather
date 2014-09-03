var app = angular.module('clickWeatherWidget', []);
app.directive('clickWeather', [function ($scope, $http) {
	return {
		restrict: 'E',
		replace: true,
		template: '<div id="clickweather"><span class="wi w-{{icon}}"></span><div><span class="w-city">{{city}}</span><span class="w-desc">{{description}}</span></div><span class="wi w-temp {{unit}}">{{temperature | number:1}}</span></div>',
		controller: ['$scope', '$http', function($scope, $http) {
	    	$scope.getTemp = function(city, unit, lang) {
	    		
	    		// Define default values
	    		var a = city,
	    		    b = unit || 'metric',
	    		    c = lang || 'en';
	    		
	        	$http({
	          		method: 'GET',
	          		url: 'http://api.openweathermap.org/data/2.5/weather?q=' + a + '&units=' + b + '&lang=' + c
	        	}).success(function(data) {
	        		
	        		// Attribute specific data to variables into the scope
	        		$scope.icon = data.weather[0].icon;
	        		$scope.city = data.name;
	        		$scope.description = data.weather[0].description;
	        		$scope.temperature = data.main.temp;
	        		$scope.unit = b;
	        		
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