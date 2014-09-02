var app = angular.module('clickWeatherWidget', []);
app.directive('clickWeather', [function ($scope, $http) {
	return {
		restrict: 'E',
		replace: true,
		template: '<div><span class="icon-{{ icon }}"></span><span class="cw_name">{{ city }}<p>{{ description }}</p></span><span class="cw_temp">{{ temperature | number:1 }}</span></div>',
		controller: ['$scope', '$http', function($scope, $http) {
	    	$scope.getTemp = function(city, unit, lang) {
	        	$http({
	          		method: 'GET',
	          		url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=' + unit + '&lang=' + lang
	        	}).success(function(data) {
	        		
	        		// Attribute specific data to variables into the scope
	        		$scope.icon = data.weather[0].icon;
	        		$scope.city = data.name;
	        		$scope.description = data.weather[0].description;
	        		$scope.temperature = data.main.temp;
	        		
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